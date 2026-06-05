import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { nitro } from 'nitro/vite' // Make sure nitro is imported

export default defineConfig({
  plugins: [
    tanstackStart(), 
    nitro({ preset: 'vercel' }) // 👈 THIS FORCES THE CORRECT OUTPUT FOR VERCEL
  ],
})
