import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  base: "/know-your-birthday/",
  plugins: [react()],
  // define: {
  //   "process.env": {},
  // },
})
