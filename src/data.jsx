import yonne from './assets/yonne.webp'
import mediconsult from './assets/mediconsult.webp'
import opah from './assets/opah.webp'
import slushd from './assets/slushd.webp'
import educonnect from './assets/educonnect.webp'
import football from './assets/football.webp'
import garderie from './assets/garderie.webp'

// Chaque texte traduisible est un objet { en, fr } ; App.jsx choisit la langue avec t().

export const profile = {
  name: 'Moussa Dione',
  github: 'https://github.com/Dionecena',
  email: 'dioneteddy@gmail.com',
  phone: '+221 76 330 94 09',
  phoneRaw: '221763309409',
  location: { en: 'Rufisque-Ouest, Zac Mbao, Senegal', fr: 'Rufisque-Ouest, Zac Mbao, Sénégal' },
}

// Réseaux : [nom, lien, icône SVG 24×24]
export const socials = [
  ['GitHub', 'https://github.com/Dionecena',
    <path fill="currentColor" d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3" />],
  ['LinkedIn', 'https://www.linkedin.com/in/moussa-dione-7b2342388',
    <path fill="currentColor" d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2ZM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2ZM7.1 20.5H3.6V9h3.5v11.5Z" />],
  ['X', 'https://x.com/dionecena1',
    <path fill="currentColor" d="M18.9 1.2h3.7l-8 9.2L24 22.8h-7.4l-5.8-7.6-6.6 7.6H.5L9 13 0 1.2h7.6l5.2 6.9 6.1-6.9Zm-1.3 19.4h2L6.5 3.2H4.3l13.3 17.4Z" />],
  ['Instagram', 'https://www.instagram.com/dionecenasn',
    <g fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".6" fill="currentColor" /></g>],
]

export const ui = {
  role: { en: ['Junior Full Stack', 'Developer'], fr: ['Développeur Full Stack', 'Junior'] },
  scrollDown: { en: 'Scroll down', fr: 'Descendre' },
  menuOpen: { en: 'Open menu', fr: 'Ouvrir le menu' },
  menuClose: { en: 'Close menu', fr: 'Fermer le menu' },
  aboutLabel: { en: 'About me', fr: 'À propos' },
  stackLabel: { en: 'The stack', fr: 'La stack' },
  servicesTitle: { en: ['WHAT I', 'CAN DO'], fr: ['CE QUE JE', 'SAIS FAIRE'] },
  journeyTitle: { en: ['MY', 'journey'], fr: ['MON', 'parcours'] },
  workTitle: { en: ['SELECTED', 'work'], fr: ['PROJETS', 'choisis'] },
  workText: { en: 'Built at hackathons, in class and in my spare time — often in a team, always shipped to the end.',
              fr: "Construits en hackathon, en cours et sur mon temps libre — souvent en équipe, toujours menés jusqu'au bout." },
  allRepos: { en: 'All my repos', fr: 'Tous mes dépôts' },
  screenshot: { en: 'screenshot', fr: 'capture' },
  game: { en: 'Go on, try to break it.', fr: 'Vas-y, essaie de le casser.' },
  play: { en: 'PLAY', fr: 'JOUER' },
  drag: { en: 'DRAG TO MOVE', fr: 'GLISSE LE DOIGT' },
  gameLabel: { en: 'HELLO WORLD brick-breaker mini-game', fr: 'Mini-jeu casse-briques HELLO WORLD' },
  available: { en: 'AVAILABLE FOR WORK', fr: 'DISPONIBLE' },
  contactTitle: { en: 'Get in touch', fr: 'On en parle ?' },
  contactText: { en: 'Open to internships, freelance work and collaborations. WhatsApp gets the fastest reply.',
                 fr: 'Ouvert aux stages, aux missions freelance et aux collaborations. WhatsApp est le plus rapide.' },
  whatsapp: { en: 'Message on WhatsApp', fr: 'Écrire sur WhatsApp' },
  sendEmail: { en: 'Send an email', fr: 'Envoyer un email' },
  cv: { en: 'Download my CV', fr: 'Télécharger mon CV' },
  phone: { en: 'Phone', fr: 'Téléphone' },
  basedIn: { en: 'Based in', fr: 'Basé à' },
  rights: { en: 'All rights reserved.', fr: 'Tous droits réservés.' },
  skip: { en: 'Skip', fr: 'Passer' },
  elsewhere: { en: 'Elsewhere', fr: 'Ailleurs' },
  portraitLabel: { en: 'Particle portrait of Moussa Dione', fr: 'Portrait de Moussa Dione en particules' },
  switchTo: { en: 'Passer le site en français', fr: 'Switch the site to English' },
}

export const nav = [
  ['#home', { en: 'Home', fr: 'Accueil' }], ['#about', { en: 'About', fr: 'À propos' }],
  ['#services', { en: 'Services', fr: 'Services' }], ['#parcours', { en: 'Journey', fr: 'Parcours' }],
  ['#projects', { en: 'Projects', fr: 'Projets' }], ['#contact', { en: 'Contact', fr: 'Contact' }],
]

// Compétences tirées des dépôts GitHub (github.com/Dionecena)
export const stack = [
  ['Java', 'Spring Boot', 'Spring Data JPA', 'Hibernate', 'JavaFX', 'Maven', 'REST APIs'],
  ['PHP', 'Laravel 12', 'Sanctum', 'Inertia', 'Node.js', 'Express', 'Prisma', 'Python', 'Flask'],
  ['React', 'TypeScript', 'Next.js', 'Vite', 'Tailwind CSS', 'Flutter', 'Dart'],
  ['PostgreSQL', 'MySQL', 'SQLite', 'Supabase', 'Docker', 'Git', 'GitHub', 'Linux'],
]

export const services = [
  { title: { en: 'Back-end & APIs', fr: 'Back-end & API' },
    items: ['Spring Boot (REST, JPA)', 'Laravel 12 + Sanctum', 'Node.js / Express + Prisma', 'Docker'],
    text: { en: 'Clean, layered APIs: domain, services, repositories and DTOs, with authentication and a real database behind them.',
            fr: 'Des API propres et en couches : domaine, services, repositories et DTO, avec authentification et une vraie base de données.' } },
  { title: { en: 'Front-end & web apps', fr: 'Front-end & applications web' },
    items: ['React 18 + TypeScript', 'Next.js', 'Inertia + React', 'Tailwind CSS'],
    text: { en: 'Fast, responsive single-page apps wired to the APIs I build, from the first screen to deployment.',
            fr: "Des applications rapides et responsives, branchées sur les API que je construis, du premier écran jusqu'au déploiement." } },
  { title: { en: 'Mobile & desktop', fr: 'Mobile & desktop' },
    items: ['Flutter (Dart)', 'JavaFX', 'Google Maps & REST APIs', 'TCP client/server'],
    text: { en: 'Cross-platform mobile apps and desktop clients, including real-time messaging over a multi-client TCP server.',
            fr: 'Des applications mobiles multiplateformes et des clients desktop, dont une messagerie temps réel sur un serveur TCP multi-clients.' } },
  { title: { en: 'Databases', fr: 'Bases de données' },
    items: ['PostgreSQL', 'MySQL', 'SQLite', 'Supabase'],
    text: { en: 'Well-modelled schemas, migrations and seeders, accessed through Eloquent, JPA, Hibernate or Prisma.',
            fr: 'Des schémas bien modélisés, migrations et seeders, exploités avec Eloquent, JPA, Hibernate ou Prisma.' } },
]

export const parcours = [
  { title: { en: 'Education', fr: 'Formation' }, items: [
    [{ en: 'BSc in Software Engineering', fr: 'Licence en Génie Logiciel' },
     { en: "Institut Supérieur d'Informatique (ISI), Dakar · 3rd year completed", fr: "Institut Supérieur d'Informatique (ISI), Dakar · L3 terminée" }],
    [{ en: 'Scientific Baccalaureate', fr: 'Baccalauréat scientifique' }, 'Cabis School'],
    [{ en: 'Online courses', fr: 'Formations en ligne' },
     { en: 'OpenClassrooms (web), Udemy (Git & GitHub), Coursera (web security)', fr: 'OpenClassrooms (web), Udemy (Git & GitHub), Coursera (sécurité web)' }],
  ] },
  { title: { en: 'Hackathons', fr: 'Hackathons' }, items: [
    ['EduConnect', { en: 'Education platform', fr: 'Plateforme éducative' }, { en: 'Winner', fr: 'Gagné' }],
    ["Dakar Slush'D", { en: 'Project for the Museum of Black Civilizations', fr: 'Projet pour le Musée des Civilisations noires' }, { en: 'Finalist', fr: 'Finaliste' }],
    ['Code & Chain Dakar 2026', { en: 'Yónne, built on Bitnob · team of 5', fr: 'Yónne, avec Bitnob · équipe de 5' }],
  ] },
  { title: { en: 'Experience', fr: 'Expérience' }, items: [
    [{ en: 'Designer · Santé pour tous', fr: 'Designer · Santé pour tous' },
     { en: 'Dieuppeul 4, Dakar · 2025 — ambulance transport and rental, biomedical waste management',
       fr: 'Dieuppeul 4, Dakar · 2025 — transport et location d’ambulances, gestion des déchets biomédicaux' }],
    [{ en: 'Baker-pastry cook', fr: 'Boulanger-pâtissier' },
     { en: 'Sope Naby bakery, Rufisque · 2022 — wrote a Python stock-management tool', fr: 'Boulangerie Sope Naby, Rufisque · 2022 — programme Python de gestion des stocks' }],
    [{ en: 'Languages', fr: 'Langues' },
     { en: 'Wolof (native) · French (fluent) · English', fr: 'Wolof (maternelle) · Français (courant) · Anglais' }],
  ] },
]

// Projets mis en avant, dans l'ordre voulu. Slush'D en tête : seul projet avec démo (son dépôt est privé), GitHub pour les autres.
export const projects = [
  { n: '01', tag: { en: 'Hackathon finalist', fr: 'Finaliste hackathon' }, title: "Slush'D", accent: 'dakar',
    sub: { en: 'Museum of Black Civilizations', fr: 'Musée des Civilisations noires' },
    text: { en: "Built as a team during the Dakar Slush'D hackathon for the Museum of Black Civilizations — and taken all the way to the final.",
            fr: "Réalisé en équipe lors du hackathon Dakar Slush'D pour le Musée des Civilisations noires, jusqu'en finale." },
    tech: ['Hackathon', { en: 'Team project', fr: "Projet d'équipe" }],
    links: [[{ en: 'Live demo', fr: 'Voir la démo' }, 'https://hackathon-dakar-slush-d.netlify.app/']], img: slushd },
  { n: '02', tag: 'Hackathon 2026', title: 'Yónne', accent: 'pay', sub: 'Bitcoin → Mobile Money',
    text: { en: 'Receive money from anywhere in bitcoin and cash it out in FCFA to Orange Money, Wave, Free or Expresso in seconds, powered by the Bitnob Lightning and payouts APIs. Built by a team of 5 for Code & Chain Dakar 2026.',
            fr: "Recevoir de l'argent en bitcoin depuis n'importe où et le retirer en FCFA sur Orange Money, Wave, Free ou Expresso en quelques secondes, grâce aux API Lightning et payouts de Bitnob. Construit en équipe de 5 pour Code & Chain Dakar 2026." },
    tech: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Lightning'],
    links: [['GitHub', 'https://github.com/Dionecena/Bitnob_api']], img: yonne },
  { n: '03', tag: { en: 'Final-year project', fr: 'Projet de fin d’études' }, title: 'Medi', accent: 'consult',
    sub: { en: 'Online medical booking', fr: 'Rendez-vous médicaux en ligne' }, img: mediconsult,
    text: { en: 'Pre-consultation and appointment booking platform for a private clinic in Dakar. Patients book real available slots, describe their symptoms and get an indicative orientation; secretaries manage the doctors’ schedules.',
            fr: 'Plateforme de préconsultation et de prise de rendez-vous pour une clinique privée de Dakar. Les patients réservent de vrais créneaux, décrivent leurs symptômes et reçoivent une orientation indicative ; le secrétariat gère le planning des médecins.' },
    tech: ['Laravel 12', 'Sanctum', 'PostgreSQL', 'React 18', 'TypeScript', 'Tailwind'],
    links: [['GitHub', 'https://github.com/Dionecena/Final-Year-Project-Defense']] },
  { n: '04', tag: 'Full stack', title: 'Opa H', accent: 'academy',
    sub: { en: 'German learning platform', fr: "Plateforme d'apprentissage de l'allemand" },
    text: { en: 'A1-level German exam practice with collaborative features: exercises by theme, text and audio submissions, comments, and scheduled clean-up jobs.',
            fr: "Préparation à l'examen d'allemand A1 avec des fonctions collaboratives : exercices par thème, réponses texte et audio, commentaires et nettoyage automatique planifié." },
    tech: ['React 18', 'Node.js', 'Express', 'Prisma', 'PostgreSQL'],
    links: [['GitHub', 'https://github.com/Dionecena/Opa-H-Academy']], img: opah },
  { n: '05', tag: { en: 'Hackathon winner', fr: 'Hackathon gagné' }, title: 'Edu', accent: 'connect',
    sub: { en: 'Education platform', fr: 'Plateforme éducative' },
    text: { en: 'A platform connecting students and teachers: online courses, real-time chat and progress tracking.',
            fr: 'Une plateforme qui connecte étudiants et enseignants : cours en ligne, chat en temps réel et suivi de progression.' },
    tech: ['Web', { en: 'Real-time', fr: 'Temps réel' }],
    links: [['GitHub', 'https://github.com/Madieyeee/EduConnect']], img: educonnect },
  { n: '06', tag: { en: 'Web app', fr: 'Application web' }, title: 'Cruyff', accent: 'academy',
    sub: { en: 'Football club platform', fr: 'Plateforme de club de football' },
    text: { en: 'A football academy website with player profiles, match calendar, ticketing, news and stats, plus a secure admin area to manage the content.',
            fr: "Site d'une académie de football : profils des joueurs, calendrier des matchs, billetterie, actualités et statistiques, avec un espace d'administration sécurisé." },
    tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
    links: [['GitHub', 'https://github.com/Dionecena/Football-Academie']], img: football },
  { n: '07', tag: { en: 'Web app', fr: 'Application web' }, title: 'Garde', accent: 'enfants',
    sub: { en: 'Childcare management', fr: "Gestion de garde d'enfants" },
    text: { en: 'A dashboard to manage children, parents and childcare sessions: scheduling with dates and times, assignments and secure sign-in.',
            fr: 'Un tableau de bord pour gérer enfants, parents et gardes : planification avec dates et horaires, affectations et connexion sécurisée.' },
    tech: ['Python', 'Flask', 'Flask-Login', 'HTML / CSS'],
    links: [['GitHub', 'https://github.com/Dionecena/Garderie-d-Enfants']], img: garderie },
]

export const about = {
  en: <>Hey, I'm <b>Moussa</b>, a <b>junior full stack developer</b> from Dakar who just completed the third year of a <b>BSc in Software Engineering</b> at ISI.
    I build products end to end: <b>REST APIs</b> with <b>Spring Boot</b>, <b>Laravel</b> and <b>Node.js</b>, front ends in <b>React and TypeScript</b>,
    mobile apps in <b>Flutter</b>, all on top of <b>PostgreSQL</b> or <b>MySQL</b>. Three hackathons so far, <b>one won</b> — and I'm looking for an
    <b> internship</b> or a real project to ship next.</>,
  fr: <>Salut, je suis <b>Moussa</b>, <b>développeur full stack junior</b> à Dakar. Je viens de terminer ma <b>Licence 3 en Génie Logiciel</b> à l'ISI.
    Je construis des produits de bout en bout : des <b>API REST</b> avec <b>Spring Boot</b>, <b>Laravel</b> et <b>Node.js</b>, des interfaces en
    <b> React et TypeScript</b>, des apps mobiles en <b>Flutter</b>, le tout sur <b>PostgreSQL</b> ou <b>MySQL</b>. Trois hackathons à mon actif,
    <b> dont un gagné</b> — et je cherche un <b>stage</b> ou un vrai projet à livrer.</>,
}
