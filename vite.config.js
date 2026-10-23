import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Relative base so the build works whether it's served from the repo
  // root (user/org Pages site) or from a subpath (project Pages site,
  // e.g. https://usuario.github.io/able-chicks/).
  base: './',
})
