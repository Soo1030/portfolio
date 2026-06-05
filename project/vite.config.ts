import { defineConfig } from '@tanstack/start/config'

export default defineConfig({
  server: {
    preset: 'static', // Forces the project to compile into plain HTML/JS files
  },
})
