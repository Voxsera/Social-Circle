import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Honor the PORT env var (used by the preview harness / autoPort).
  server: {
    port: process.env.PORT ? Number(process.env.PORT) : 5173,
  },
})
