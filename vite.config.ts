import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import sitemap from 'vite-plugin-sitemap'
import viteImagemin from 'vite-plugin-imagemin'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ['defaults', 'not IE 11'],
      modernPolyfills: true
    }),
    sitemap({
      hostname: 'https://www.nucton.net',
      changefreq: 'weekly',
      priority: 0.9,
      readable: true,
      generateRobotsTxt: false
    }),
    viteImagemin({
      gifsicle: { optimizationLevel: 3 },
      optipng: { optimizationLevel: 5 },
      mozjpeg: { quality: 78 },
      pngquant: { quality: [0.6, 0.8] },
      svgo: {
        plugins: [{ name: 'preset-default' }, { name: 'removeViewBox', active: false }]
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
