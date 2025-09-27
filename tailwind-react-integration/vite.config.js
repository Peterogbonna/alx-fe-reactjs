// Ensure you import the React plugin
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // <--- REQUIRED IMPORT
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Ensure the plugin is included in the plugins array
  plugins: [
    react(),
    tailwindcss(), // <--- REQUIRED USAGE
  ], 
})