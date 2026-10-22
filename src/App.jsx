import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import Intro from './Intro.jsx'
import Particles from './Particles.jsx'
import Breakout from './Breakout.jsx'
import portrait from './assets/portrait.webp'
import { profile, socials, ui, nav, stack, services, parcours, projects, about } from './data.jsx'

// Langue courante : t() renvoie la version { en, fr } qui correspond, ou la valeur telle quelle si elle n'est pas traduite.
const Lang = createContext('en')
const useT = () => { const lang = useContext(Lang); return v => (v && typeof v === 'object' && 'en' in v ? v[lang] : v) }

const Arrow = ({ className = '' }) => <span aria-hidden="true" className={className}>↗</span>

const Socials = ({ className = '' }) => (
  <div className={`flex gap-3 ${className}`}>
    {socials.map(([name, href, icon]) => (
      <a key={name} href={href} target="_blank" rel="noopener" aria-label={name} title={name}
         className="grid size-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white/80 transition hover:bg-white hover:text-black">
        <svg viewBox="0 0 24 24" className="size-[18px]" aria-hidden="true">{icon}</svg>
      </a>
    ))}
  </div>
)

function LangSwitch({ lang, setLang, className = '' }) {
  const t = useT()
  return (
    <button onClick={() => setLang(lang === 'en' ? 'fr' : 'en')} aria-label={t(ui.switchTo)}
            className={`flex rounded-full border border-white/20 p-0.5 text-[11px] font-semibold tracking-[.1em] ${className}`}>
      {['en', 'fr'].map(l => <span key={l} className={`rounded-full px-2.5 py-1 transition ${lang === l ? 'bg-white text-black' : 'text-white/60'}`}>{l.toUpperCase()}</span>)}
    </button>
  )
}

function Header({ lang, setLang }) {
  const t = useT()
  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const on = () => setProgress(scrollY / Math.max(1, document.documentElement.scrollHeight - innerHeight))
    addEventListener('scroll', on, { passive: true })
    return () => removeEventListener('scroll', on)
  }, [])
  // ne touche au défilement que menu ouvert : sinon on annulerait le blocage posé par l'intro
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 bg-ink/90 backdrop-blur-md">
        <div className="flex h-16 items-center justify-between gap-4 px-5 md:h-20 md:px-10">
          <a href="#home" className="text-[17px] font-black tracking-[.18em]">DIONECENA</a>
          <nav className="ml-auto hidden gap-8 text-[12px] tracking-[.14em] uppercase md:flex">
            {nav.map(([h, l]) => <a key={h} href={h} className="text-white/70 transition hover:text-white">{t(l)}</a>)}
          </nav>
          <LangSwitch lang={lang} setLang={setLang} className="relative z-50 ml-auto md:ml-0" />
          <button onClick={() => setOpen(!open)} className="relative z-50 -mr-2 grid size-10 place-items-center md:hidden" aria-label={t(open ? ui.menuClose : ui.menuOpen)} aria-expanded={open}>
            <span className={`absolute h-px w-6 bg-white transition ${open ? 'rotate-45' : '-translate-y-1'}`} />
            <span className={`absolute h-px w-6 bg-white transition ${open ? '-rotate-45' : 'translate-y-1'}`} />
          </button>
        </div>
        <div className="h-px bg-white/10"><div className="h-px bg-white/70" style={{ width: `${progress * 100}%` }} /></div>
      </header>
      {/* Menu plein écran mobile */}
      <div className={`fixed inset-0 z-30 flex flex-col items-center justify-center gap-7 bg-ink transition duration-500 md:hidden ${open ? '' : 'pointer-events-none opacity-0'}`}>
        {nav.map(([h, l], i) => (
          <a key={h} href={h} onClick={() => setOpen(false)} style={{ transitionDelay: open ? `${i * 50}ms` : '0ms' }}
             className={`text-3xl font-black tracking-[.14em] uppercase transition duration-500 ${open ? '' : 'translate-y-4 opacity-0'}`}>{t(l)}</a>
        ))}
      </div>
    </>
  )
}

function Hero({ ready }) {
  const t = useT()
  const [a, b] = t(ui.role)
  return (
    <section id="home" className="relative h-[100svh] min-h-[560px] overflow-hidden">
      <Particles src={portrait} ready={ready} label={t(ui.portraitLabel)} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,transparent_45%,#0a0a0a_100%)]" />
      {/* Titre + contact : en haut et centré sur mobile, en bas à gauche sur desktop */}
      <div className="absolute inset-x-0 top-28 flex flex-col items-center gap-4 md:top-auto md:bottom-10 md:left-10 md:items-start">
        <p className="text-lg font-semibold md:text-2xl">{a} <span className="serif text-white/60">{b}</span></p>
        <div className="flex gap-2">
          <a href="#about" aria-label={t(ui.scrollDown)} className="grid size-9 place-items-center rounded-full border border-white/20 text-sm">↙</a>
          <a href="#contact" className="serif rounded-full border border-white/20 px-5 py-1.5 text-sm text-white/80 hover:bg-white hover:text-black">Contact</a>
        </div>
      </div>
    </section>
  )
}

function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  // apparition douce quand l'élément entre à l'écran
  const ref = useCallback(el => {
    if (!el) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('in'); io.disconnect() } }, { threshold: .15 })
    io.observe(el)
  }, [])
  return <Tag ref={ref} className={`reveal ${className}`} {...rest}>{children}</Tag>
}

function About() {
  const t = useT()
  return (
    <section id="about" className="py-24 md:py-36">
      <div className="mx-auto max-w-5xl px-5 text-center md:px-10">
        <p className="label mb-4">{t(ui.aboutLabel)}</p>
        <Reveal as="h2" className="metal mb-10 text-7xl md:text-9xl">Intro</Reveal>
        <Reveal className="rounded-3xl border border-white/5 bg-card p-6 text-left text-[15px] leading-relaxed text-white/60 md:p-12 md:text-2xl md:leading-snug [&_b]:font-semibold [&_b]:text-white">
          {t(about)}
        </Reveal>
      </div>
      <p className="label mt-20 mb-6 px-5 md:px-10">{t(ui.stackLabel)}</p>
      <div className="space-y-3 overflow-hidden">
        {stack.map((row, r) => (
          <div key={r} className={`marquee flex w-max gap-3 ${r % 2 ? 'rev' : ''}`} style={{ '--dur': `${35 + r * 6}s` }}>
            {[...row, ...row, ...row, ...row].map((s, i) => (
              <span key={i} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[.03] px-4 py-2 text-sm whitespace-nowrap text-white/80">
                <span className="size-1 rounded-full bg-white/40" />{s}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

function Services() {
  const t = useT()
  const [open, setOpen] = useState(-1)
  const [l1, l2] = t(ui.servicesTitle)
  return (
    <section id="services" className="py-24 md:py-36">
      <Reveal as="h2" className="metal mb-12 px-5 text-right text-5xl md:px-10 md:text-8xl">{l1}<br />{l2}</Reveal>
      <div className="border-t border-white/10">
        {services.map((s, i) => {
          const on = open === i
          return (
            <div key={i} className={`border-b border-white/10 transition-colors duration-500 ${on ? 'bg-sand text-black' : ''}`}>
              <button onClick={() => setOpen(on ? -1 : i)} aria-expanded={on}
                      className="flex w-full items-center gap-4 px-5 py-6 text-left md:gap-10 md:px-10 md:py-9">
                <span className={`text-lg md:text-2xl ${on ? 'text-black/60' : 'text-white/70'}`}>0{i + 1}</span>
                <span className="flex-1 text-[13px] font-extrabold tracking-[.08em] uppercase md:text-3xl">{t(s.title)}</span>
                <span className={`text-xl transition-transform duration-500 ${on ? '' : 'rotate-90'}`}>↗</span>
              </button>
              <div className={`grid transition-[grid-template-rows] duration-500 ${on ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden">
                  <div className="grid gap-6 px-5 pb-8 md:grid-cols-2 md:px-10 md:pl-24">
                    <ul className="space-y-2 text-[15px] text-black/70">
                      {s.items.map(it => <li key={it} className="flex items-center gap-3"><span className="size-1.5 bg-black/70" />{it}</li>)}
                    </ul>
                    <p className="text-lg leading-snug text-black/80">{t(s.text)}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

function Parcours() {
  const t = useT()
  const [a, b] = t(ui.journeyTitle)
  return (
    <section id="parcours" className="px-5 py-24 md:px-10 md:py-36">
      <Reveal as="h2" className="mb-12 text-5xl md:text-8xl"><span className="metal">{a}</span> <span className="serif text-white/70">{b}</span></Reveal>
      <div className="grid gap-5 md:grid-cols-3">
        {parcours.map((g, gi) => (
          <Reveal key={gi} className="rounded-3xl border border-white/5 bg-card p-6">
            <p className="label mb-2">{t(g.title)}</p>
            {g.items.map(([title, d, tag], k) => (
              <div key={k} className="border-b border-white/5 py-4 last:border-0">
                <div className="flex items-center justify-between gap-3">
                  <b className="text-lg font-bold">{t(title)}</b>
                  {tag && <span className="rounded-full bg-sand px-3 py-0.5 text-xs font-semibold text-black">{t(tag)}</span>}
                </div>
                <p className="mt-1 text-sm text-white/50">{t(d)}</p>
              </div>
            ))}
          </Reveal>
        ))}
      </div>
    </section>
  )
}

const touch = matchMedia('(hover: none)').matches

function Projects() {
  const t = useT()
  const [a, b] = t(ui.workTitle)
  return (
    <section id="projects" className="px-5 py-24 md:px-10 md:py-36">
      <Reveal as="h2" className="mb-6 text-5xl md:text-8xl"><span className="metal">{a}</span> <span className="serif text-white/70">{b}</span></Reveal>
      <p className="mb-6 max-w-xl text-white/50">{t(ui.workText)}</p>
      <a href={profile.github} target="_blank" rel="noopener" className="mb-16 inline-block rounded-full bg-sand px-5 py-2.5 text-sm text-black hover:bg-white">{t(ui.allRepos)} <Arrow /></a>
      <div className="space-y-24 md:space-y-36">
        {projects.map((p, i) => (
          <article key={p.n} className={`grid items-center gap-8 md:grid-cols-2 md:gap-16 ${i % 2 ? 'md:[&>*:first-child]:order-2' : ''}`}>
            {/* Capture entière (pas de recadrage) pour montrer le vrai site, technos en dessous */}
            <Reveal>
              <img src={p.img} alt={`${p.title} ${p.accent} — ${t(ui.screenshot)}`} loading="lazy"
                   className="h-auto w-full rounded-2xl border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,.8)]" />
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map(x => <span key={t(x)} className="rounded-full border border-white/10 bg-white/[.03] px-3 py-1 text-xs text-white/70">{t(x)}</span>)}
              </div>
            </Reveal>
            <Reveal>
              <p className="mb-3 text-xs font-semibold tracking-[.3em] text-white/70">{p.n} · {t(p.tag).toUpperCase()}</p>
              <h3 className="mb-5 text-4xl leading-none md:text-6xl">
                <span className="metal">{p.title.toUpperCase()}</span> <span className="serif text-white/70">{p.accent}</span>
                <span className="metal mt-1 block text-2xl md:text-4xl">{t(p.sub).toUpperCase()}</span>
              </h3>
              <p className="mb-7 leading-relaxed text-white/55">{t(p.text)}</p>
              <div className="flex flex-wrap gap-3">
                {p.links.map(([l, h], k) => (
                  // sur tactile, même onglet : les navigateurs intégrés aux applis ignorent souvent target=_blank
                  <a key={h} href={h} target={touch ? undefined : '_blank'} rel="noopener"
                     className={`rounded-full px-5 py-2.5 text-sm ${k ? 'border border-white/20 hover:bg-white/10' : 'bg-sand text-black hover:bg-white'}`}>
                    {t(l)} <Arrow />
                  </a>
                ))}
              </div>
            </Reveal>
          </article>
        ))}
      </div>
    </section>
  )
}

function Game() {
  const t = useT()
  return (
    <section className="px-5 py-24 md:px-10 md:py-32">
      <p className="mb-10 inline-block border-b border-white/60 pb-1 text-sm tracking-wide">{t(ui.game)}</p>
      {/* sur ordi, le jeu + son bouton tiennent dans la hauteur de l'écran (canvas 31/22) */}
      <div className="mx-auto max-w-4xl md:max-w-[min(48rem,calc((100svh_-_16rem)*31/22))]"><Breakout labels={{ play: t(ui.play), drag: t(ui.drag), aria: t(ui.gameLabel) }} /></div>
    </section>
  )
}

function Contact() {
  const t = useT()
  const rows = [['Email', profile.email, `mailto:${profile.email}`], [t(ui.phone), profile.phone, `tel:+${profile.phoneRaw}`],
    [t(ui.basedIn), t(profile.location)]]
  return (
    <section id="contact" className="relative overflow-hidden px-5 pt-24 pb-10 md:px-10 md:pt-36">
      <div className="smoke pointer-events-none absolute -bottom-40 -left-20 size-[700px]" />
      <div className="smoke pointer-events-none absolute -right-40 bottom-0 size-[600px]" style={{ animationDelay: '-9s' }} />
      <div className="relative grid gap-12 md:grid-cols-2 md:gap-20">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] tracking-[.25em]">
            <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />{t(ui.available)}
          </p>
          <Reveal as="h2" className="metal mb-6 text-6xl md:text-8xl">{t(ui.contactTitle)}</Reveal>
          <p className="mb-8 max-w-md text-lg text-white/60">{t(ui.contactText)}</p>
          <div className="flex flex-col items-start gap-3">
            <a href={`https://wa.me/${profile.phoneRaw}`} target="_blank" rel="noopener" className="rounded-full bg-sand px-6 py-3 text-black hover:bg-white">{t(ui.whatsapp)} <Arrow /></a>
            <a href={`mailto:${profile.email}`} className="rounded-full border border-white/20 px-6 py-3 hover:bg-white/10">{t(ui.sendEmail)} ✉</a>
            <a href={t(ui.cvFile)} download={`CV-Moussa-Dione-${t(ui.cvFile).slice(3, 5).toUpperCase()}.pdf`} className="rounded-full border border-white/20 px-6 py-3 hover:bg-white/10">{t(ui.cv)} ↓</a>
          </div>
        </div>
        <div className="self-end rounded-3xl border border-white/5 bg-card/80 backdrop-blur">
          {rows.map(([k, v, h]) => (
            <div key={k} className="border-b border-white/5 p-6 last:border-0">
              <p className="label mb-2">{k}</p>
              {h ? <a href={h} className="text-lg break-all hover:underline">{v}</a> : <p className="text-lg">{v}</p>}
            </div>
          ))}
          <div className="p-6">
            <p className="label mb-3">{t(ui.elsewhere)}</p>
            <Socials />
          </div>
        </div>
      </div>
      <footer className="relative mt-24 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/40 md:flex-row md:justify-between">
        <div className="flex flex-wrap items-center gap-5">{nav.slice(0, 5).map(([h, l]) => <a key={h} href={h} className="hover:text-white">{t(l)}</a>)}</div>
        <p>© {new Date().getFullYear()} Moussa Dione. {t(ui.rights)}</p>
      </footer>
    </section>
  )
}

// Langue mémorisée par visiteur ; anglais par défaut. Le stockage peut être bloqué (navigation privée) : on ignore l'erreur.
const saved = (() => { try { return localStorage.getItem('lang') } catch { return null } })()

export default function App() {
  const [lang, setLang] = useState(saved === 'fr' ? 'fr' : 'en')
  const [intro, setIntro] = useState(true)
  const done = useCallback(() => setIntro(false), [])
  useEffect(() => {
    document.documentElement.lang = lang
    try { localStorage.setItem('lang', lang) } catch { /* stockage indisponible */ }
  }, [lang])

  return (
    <Lang.Provider value={lang}>
      {intro && <Intro onDone={done} skipLabel={ui.skip[lang]} />}
      <Header lang={lang} setLang={setLang} />
      <main>
        <Hero ready={!intro} />
        <About />
        <Services />
        <Parcours />
        <Projects />
        <Game />
        <Contact />
      </main>
    </Lang.Provider>
  )
}
