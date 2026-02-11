import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    const isProduction = mode === 'production';
    
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        // Production optimizations
        target: 'esnext',
        minify: 'esbuild', // esbuild is faster and built-in, no need to install terser
        // Manual tree shaking and optimization
        rollupOptions: {
          output: {
            manualChunks: {
              // Separate vendor chunks for better caching
              'react-vendor': ['react', 'react-dom'],
              'lucide-icons': ['lucide-react'],
              // AI SDK in separate chunk (lazy loaded anyway)
              'ai-sdk': ['@google/generative-ai'],
            },
            // Better chunk naming for caching
            chunkFileNames: 'assets/js/[name]-[hash].js',
            entryFileNames: 'assets/js/[name]-[hash].js',
            assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
          },
        },
        // Reduce chunk size warnings threshold
        chunkSizeWarningLimit: 1000,
        // CSS code splitting
        cssCodeSplit: true,
        // Source maps only in dev mode
        sourcemap: !isProduction,
        // Report compressed size
        reportCompressedSize: isProduction,
      },
      // Performance optimizations
      optimizeDeps: {
        include: ['react', 'react-dom', 'lucide-react'],
        // Exclude heavy AI SDK from initial optimization
        exclude: ['@google/generative-ai'],
      },
    };
});
