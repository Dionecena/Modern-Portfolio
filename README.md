# Modern Portfolio — Moussa Dione (Dionecena)

Mon portfolio de développeur full stack junior, en anglais et en français.

**En ligne :** https://dionecena.github.io/Modern-Portfolio/

## Ce qu'il contient

- **Intro animée** : le E roule, les lettres tombent pour former DIONECENA, puis se changent en PORTFOLIO.
- **Portrait en particules** qui réagit à la souris et au doigt.
- **Projets** : Dakar Slush'D, Yónne, MediConsult, Opa H Academy, EduConnect, Cruyff Academy, Garde d'enfants.
- **Parcours, services et stack** : formation, hackathons, expérience.
- **Mini-jeu casse-briques « HELLO WORLD »** avec 3 vies.
- **CV à télécharger** en français ou en anglais, selon la langue du site.
- **Bouton EN / FR** : la langue choisie est mémorisée.

## Stack

React 18 · Vite 6 · Tailwind CSS 4 · Canvas 2D (aucune autre dépendance)

## Lancer en local

```bash
npm install
npm run dev
```

Build de production : `npm run build` (le résultat va dans `dist/`).

## Structure

| Fichier | Rôle |
|---|---|
| `src/data.jsx` | Tous les textes EN/FR, réseaux, projets, parcours |
| `src/App.jsx` | Sections du site et bouton de langue |
| `src/Intro.jsx` | Animation d'introduction |
| `src/Particles.jsx` | Portrait en particules (`src/assets/portrait.webp`) |
| `src/Breakout.jsx` | Mini-jeu casse-briques |
| `cv/` | Sources HTML des CV ; `sh cv/build.sh` génère `public/cv-fr.pdf` et `public/cv-en.pdf` |

## Déploiement

Chaque push sur `main` construit et publie le site sur GitHub Pages
via `.github/workflows/deploy.yml`.

## Contact

- GitHub : [@Dionecena](https://github.com/Dionecena)
- LinkedIn : [Moussa Dione](https://www.linkedin.com/in/moussa-dione-7b2342388)
- Email : dioneteddy@gmail.com
