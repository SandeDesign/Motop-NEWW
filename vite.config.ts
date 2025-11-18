import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: ['lucide-react'],
  },

  build: {
    target: 'es2020',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'icons': ['lucide-react'],
          'motor': ['./src/pages/MotorLessons.tsx'],
          'auto': ['./src/pages/AutoLessons.tsx'],
          'contact': ['./src/pages/Contact.tsx'],
          'signup': ['./src/pages/SignupForm.tsx'],
          'legal': ['./src/pages/Legal.tsx'],
        }
      }
    },
    chunkSizeWarningLimit: 600,
    cssCodeSplit: true,
    sourcemap: false,
  },
});