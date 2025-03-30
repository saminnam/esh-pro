import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base:  "/eshwar-construction/",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [
    tailwindcss(),
  ],
})