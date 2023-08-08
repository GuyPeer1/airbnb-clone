import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/public/',
  plugins: [react()],
  optimizeDeps: { // 👈 optimizedeps
    esbuildOptions: {
      target: "esnext", 
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis'
      },
      supported: { 
        bigint: true 
      },
    }
  }, 
});
