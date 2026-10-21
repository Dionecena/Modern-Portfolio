import { useEffect, useState } from 'react'

// Les deux mots ont 9 lettres : chaque case passe d'une lettre de DIONECENA à celle de PORTFOLIO.
const FROM = 'DIONECENA', TO = 'PORTFOLIO', PIVOT = 4 // le E du milieu
const FALL = [...FROM].map((_, k) => k).filter(k => k !== PIVOT) // ordre de chute : de gauche à droite

// Écran d'ouverture : le E arrive de la droite en roulant, les autres lettres tombent une à une
// de gauche à droite pour former DIONECENA, puis chaque lettre se change en celle de PORTFOLIO.
export default function Intro({ onDone, skipLabel }) {
  const [step, setStep] = useState(0) // 0 E qui roule, 1 chute des lettres, 3 sortie
  const [morphed, setMorphed] = useState(0) // nombre de lettres déjà changées en PORTFOLIO

  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return onDone()
    document.body.style.overflow = 'hidden'
    const t = [[1100, 1], [4800, 3]].map(([ms, s]) => setTimeout(() => setStep(s), ms))
    for (let k = 1; k <= TO.length; k++) t.push(setTimeout(() => setMorphed(k), 2900 + (k - 1) * 110))
    t.push(setTimeout(() => { document.body.style.overflow = ''; onDone() }, 5400))
    return () => { t.forEach(clearTimeout); document.body.style.overflow = '' }
  }, [onDone])

  return (
    <div className={`fixed inset-0 z-50 grid place-items-center transition-opacity duration-700 ${step === 3 ? 'pointer-events-none opacity-0' : ''}`}
         style={{ background: 'radial-gradient(circle at 50% 50%, #1b1b1b, #0a0a0a 60%)' }} aria-hidden="true">
      <div className="flex px-4 text-[clamp(40px,12vw,170px)] leading-none [perspective:600px]">
        {[...FROM].map((c, k) => {
          // dégradé sur chaque lettre : background-clip:text du parent ne peint pas les enfants transformés
          let letter = null
          const done = k < morphed // cette lettre est déjà devenue celle de PORTFOLIO
          if (done) letter = <span key="to" className="flip metal">{TO[k]}</span>
          else if (k === PIVOT) letter = <span key="from" className="metal inline-block" style={{ animation: 'roll 1s cubic-bezier(.2,.7,.3,1) both' }}>{c}</span>
          else if (step >= 1) letter = <span key="from" className="metal inline-block"
            style={{ '--rot': `${(k * 47) % 70 - 35}deg`, animation: `tumble .7s cubic-bezier(.5,0,.6,1) ${FALL.indexOf(k) * 120}ms both` }}>{c}</span>
          return (
            <span key={k} className="relative">
              {/* case invisible : réserve la place de la lettre affichée pour que le mot ne bouge pas */}
              <span className="metal invisible">{done ? TO[k] : c}</span>
              <span className="absolute inset-0 text-center">{letter}</span>
            </span>
          )
        })}
      </div>
      <button onClick={() => { setStep(3); setTimeout(onDone, 500) }} className="label absolute bottom-8 hover:text-white">{skipLabel}</button>
    </div>
  )
}
