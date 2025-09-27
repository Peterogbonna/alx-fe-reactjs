// Ensure you import the React plugin
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // <--- REQUIRED IMPORT

export default defineConfig({
  // Ensure the plugin is included in the plugins array
  plugins: [react()], // <--- REQUIRED USAGE
  // ... other config
})