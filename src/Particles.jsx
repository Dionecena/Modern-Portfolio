import { useEffect, useRef } from 'react'

// Portrait en particules : chaque pixel de la silhouette détourée devient un petit carré
// qui attend dispersé jusqu'à `ready`, se range à sa place, fuit le doigt / la souris
// et se disperse quand on fait défiler la page.
export default function Particles({ src, label, ready = true }) {
  const ref = useRef(null)
  const readyRef = useRef(ready)
  readyRef.current = ready

  useEffect(() => {
    const cv = ref.current, ctx = cv.getContext('2d'), img = new Image()
    const still = matchMedia('(prefers-reduced-motion: reduce)').matches
    let pts = [], raf = 0, visible = true, size = 2, mouse = { x: -1e4, y: -1e4 }

    function build() {
      const dpr = Math.min(devicePixelRatio || 1, 2)
      if (!cv.offsetWidth || !cv.offsetHeight || !img.width) return
      cv.width = cv.offsetWidth * dpr; cv.height = cv.offsetHeight * dpr
      const mobile = cv.offsetWidth < 768
      // la photo est détourée (PNG transparent) et recadrée sur la personne, ancrée en bas de l'écran
      const h = Math.min(cv.height * (mobile ? .74 : .86), cv.width * (mobile ? .95 : .5) * img.height / img.width)
      const w = h * img.width / img.height
      const off = document.createElement('canvas'); off.width = cv.width; off.height = cv.height
      const o = off.getContext('2d')
      o.drawImage(img, (cv.width - w) / 2, cv.height - h, w, h)
      const data = o.getImageData(0, 0, off.width, off.height).data
      const step = Math.max(2, Math.round(3 * dpr)) // petit pas = portrait net
      size = step * .9
      pts = []
      for (let y = 0; y < off.height; y += step)
        for (let x = 0; x < off.width; x += step) {
          const i = (y * off.width + x) * 4
          if (data[i + 3] < 140) continue // hors silhouette
          // vraies couleurs ; les tons sombres (costume noir) sont relevés et refroidis pour rester visibles sur le fond noir
          const lift = v => 255 * (v / 255) ** .7
          const c = `rgb(${lift(data[i]) + 6 | 0},${lift(data[i + 1]) + 10 | 0},${Math.min(255, lift(data[i + 2]) + 22) | 0})`
          const a = Math.random() * Math.PI * 2
          pts.push({ tx: x, ty: y, x: still ? x : Math.random() * cv.width, y: still ? y : Math.random() * cv.height,
            vx: 0, vy: 0, c, dx: Math.cos(a), dy: Math.sin(a) })
        }
      for (let i = 0; i < (mobile ? 180 : 350); i++) {
        const x = Math.random() * cv.width, y = Math.random() * cv.height
        pts.push({ tx: x, ty: y, x, y, vx: 0, vy: 0, dx: 0, dy: 0, tw: Math.random() * 6, star: 1 })
      }
    }

    function frame(t) {
      raf = requestAnimationFrame(frame)
      if (!visible) return
      ctx.clearRect(0, 0, cv.width, cv.height)
      const dpr = Math.min(devicePixelRatio || 1, 2), r = 90 * dpr
      const scatter = Math.min(1, scrollY / (cv.offsetHeight * .8)) * 260 * dpr
      const go = readyRef.current // pendant l'intro, les particules restent dispersées
      for (const p of pts) {
        if (go) {
          const tx = p.tx + p.dx * scatter, ty = p.ty + p.dy * scatter
          const mx = p.x - mouse.x, my = p.y - mouse.y, d = Math.hypot(mx, my)
          if (d < r && d > 0) { const f = (r - d) / r * 3; p.vx += mx / d * f; p.vy += my / d * f }
          p.vx = (p.vx + (tx - p.x) * .03) * .86
          p.vy = (p.vy + (ty - p.y) * .03) * .86
          p.x += p.vx; p.y += p.vy
          // arrivée : on cale au pixel pour une mosaïque parfaitement alignée (portrait net)
          if (Math.abs(tx - p.x) < .5 && Math.abs(ty - p.y) < .5 && Math.abs(p.vx) + Math.abs(p.vy) < .1) { p.x = tx; p.y = ty; p.vx = p.vy = 0 }
        }
        if (p.star) {
          ctx.fillStyle = `rgba(255,255,255,${.12 + .12 * Math.sin(t / 400 + p.tw)})`
          ctx.fillRect(p.x, p.y, 1.2 * dpr, 1.2 * dpr)
        } else {
          ctx.fillStyle = p.c
          ctx.fillRect(Math.round(p.x), Math.round(p.y), size, size)
        }
      }
    }

    const move = e => { const r = cv.getBoundingClientRect(), k = cv.width / r.width; mouse = { x: (e.clientX - r.left) * k, y: (e.clientY - r.top) * k } }
    const leave = () => { mouse = { x: -1e4, y: -1e4 } }
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting })
    io.observe(cv)
    cv.addEventListener('pointermove', move)
    cv.addEventListener('pointerdown', move)
    cv.addEventListener('pointerleave', leave)
    cv.addEventListener('pointerup', leave)
    // sur mobile la barre d'adresse change la hauteur : on ne reconstruit que si la largeur change
    let lastW = 0
    const resize = () => { if (cv.offsetWidth !== lastW) { lastW = cv.offsetWidth; build() } }
    addEventListener('resize', resize)
    // build() directement : un resize arrivé avant le chargement a déjà mémorisé la largeur
    img.onload = () => { lastW = cv.offsetWidth; build(); raf = requestAnimationFrame(frame) }
    img.src = src
    return () => { img.onload = null; cancelAnimationFrame(raf); io.disconnect(); removeEventListener('resize', resize) }
  }, [src])

  return <canvas ref={ref} className="absolute inset-0 h-full w-full touch-pan-y" role="img" aria-label={label} />
}
