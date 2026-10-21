import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base './' : le build marche quel que soit le nom du dépôt GitHub Pages
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
