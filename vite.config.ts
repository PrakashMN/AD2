import { defineConfig, type Plugin } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import fs from 'fs'
import path from 'path'

function devImageCache(): Plugin {
  const cacheDir = path.resolve(__dirname, 'node_modules', '.cache-images')

  return {
    name: 'dev-image-cache',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url ?? ''
        if (!/\.(jpe?g|png)$/i.test(url)) return next()

        const cachePath = path.join(cacheDir, url.replace(/^\//, ''))
        if (fs.existsSync(cachePath)) {
          const ext = path.extname(cachePath).toLowerCase()
          const types: Record<string, string> = { '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png' }
          res.setHeader('Content-Type', types[ext] ?? 'application/octet-stream')
          res.setHeader('Cache-Control', 'public, max-age=31536000, immutable')
          res.end(fs.readFileSync(cachePath))
          return
        }
        next()
      })
    },
  }
}

export default defineConfig({
  plugins: [
    ViteImageOptimizer({
      includePublic: true,
      jpg: { quality: 80, mozjpeg: true },
      jpeg: { quality: 80, mozjpeg: true },
      png: { quality: 80, compressionLevel: 9 },
      webp: { quality: 75 },
      avif: { quality: 60 },
      cache: false,
      logStats: true,
    }),
    devImageCache(),
  ],
  build: {
    target: 'es2023',
  },
})
