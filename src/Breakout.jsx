import { useEffect, useRef, useState } from 'react'

// Casse-briques « HELLO WORLD » : la raquette joue toute seule jusqu'à ce qu'on appuie sur JOUER.
const FONT = {
  H: ['10001', '10001', '11111', '10001', '10001'], E: ['11111', '10000', '11110', '10000', '11111'],
  L: ['10000', '10000', '10000', '10000', '11111'], O: ['11111', '10001', '10001', '10001', '11111'],
  W: ['10001', '10001', '10101', '10101', '01010'], R: ['11110', '10001', '11110', '10010', '10001'],
  D: ['11110', '10001', '10001', '10001', '11110'],
}

export default function Breakout({ labels }) {
  const ref = useRef(null)
  const ctl = useRef({ manual: false })
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const cv = ref.current, ctx = cv.getContext('2d')
    let raf = 0, bricks = [], ball, pad, W, H, cell, visible = false

    function reset() {
      const dpr = Math.min(devicePixelRatio || 1, 2)
      W = cv.width = cv.offsetWidth * dpr; H = cv.height = cv.offsetHeight * dpr
      cell = W / 31 // 5 lettres de 5 colonnes + 6 espaces = 31 cases
      bricks = []
      ;['HELLO', 'WORLD'].forEach((word, row) => [...word].forEach((ch, li) =>
        FONT[ch].forEach((line, y) => [...line].forEach((b, x) => {
          if (b === '1') bricks.push({ x: (1 + li * 6 + x) * cell, y: (1 + row * 6.5 + y) * cell })
        }))))
      pad = { w: cell * 5, x: W / 2, y: H - cell * 2.5 }
      launch()
    }
    const launch = () => { ball = { x: W / 2, y: H * .7, vx: cell * .18, vy: -cell * .22, r: cell * .4 } }

    function frame() {
      raf = requestAnimationFrame(frame)
      if (!visible) return
      const c = ctl.current
      if (c.restart) { c.restart = false; c.lives = 3; reset() }
      if (!c.manual) pad.x += (ball.x - pad.x) * .12
      else if (c.x != null) pad.x = c.x * W
      ball.x += ball.vx; ball.y += ball.vy
      if (ball.x < ball.r || ball.x > W - ball.r) ball.vx *= -1
      if (ball.y < ball.r) ball.vy = Math.abs(ball.vy)
      if (ball.vy > 0 && ball.y + ball.r > pad.y && ball.y < pad.y + cell && Math.abs(ball.x - pad.x) < pad.w / 2) {
        ball.vy = -Math.abs(ball.vy); ball.vx = (ball.x - pad.x) / (pad.w / 2) * cell * .3
      }
      if (ball.y > H + ball.r) {
        if (c.manual && --c.lives > 0) launch() // vie perdue : on relance la balle, les briques restent
        else { c.manual = false; setPlaying(false); reset() }
      }
      bricks = bricks.filter(b => {
        const hit = ball.x > b.x && ball.x < b.x + cell && ball.y > b.y && ball.y < b.y + cell
        if (hit) ball.vy *= -1
        return !hit
      })
      if (!bricks.length) reset()

      ctx.clearRect(0, 0, W, H)
      ctx.fillStyle = '#eee'
      for (const b of bricks) ctx.fillRect(b.x + cell * .12, b.y + cell * .12, cell * .76, cell * .76)
      ctx.beginPath(); ctx.arc(ball.x, ball.y, ball.r, 0, 7); ctx.fill()
      ctx.beginPath(); ctx.roundRect(pad.x - pad.w / 2, pad.y, pad.w, cell * .45, cell); ctx.fill()
      if (c.manual) for (let i = 0; i < c.lives; i++) { ctx.beginPath(); ctx.arc(cell * (1 + i * 1.2), H - cell * .9, cell * .3, 0, 7); ctx.fill() }
    }

    const move = e => { const r = cv.getBoundingClientRect(); ctl.current.x = (e.clientX - r.left) / r.width }
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting })
    io.observe(cv)
    cv.addEventListener('pointermove', move)
    cv.addEventListener('pointerdown', move)
    let lastW = 0
    const resize = () => { if (cv.offsetWidth !== lastW) { lastW = cv.offsetWidth; reset() } }
    addEventListener('resize', resize)
    resize(); raf = requestAnimationFrame(frame)
    return () => { cancelAnimationFrame(raf); io.disconnect(); removeEventListener('resize', resize) }
  }, [])

  const play = () => { Object.assign(ctl.current, { manual: true, restart: true }); setPlaying(true) }

  return (
    <div>
      <canvas ref={ref} className={`aspect-[31/22] w-full ${playing ? 'touch-none' : 'touch-pan-y'}`} aria-label={labels.aria} />
      <button onClick={play} disabled={playing}
              className="mt-4 ml-auto block border border-white/40 px-5 py-2 text-xs tracking-[.35em] hover:bg-white hover:text-black disabled:opacity-30">
        {playing ? labels.drag : labels.play}
      </button>
    </div>
  )
}
