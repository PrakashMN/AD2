const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const publicDir = path.resolve(__dirname, '..', 'public')
const cacheDir = path.resolve(__dirname, '..', 'node_modules', '.cache-images')

const imageExts = ['.jpg', '.jpeg', '.png']

async function* walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      yield* walk(full)
    } else {
      yield full
    }
  }
}

async function optimize() {
  console.log('Optimizing images for dev...')
  const start = Date.now()
  let saved = 0
  let count = 0

  for await (const file of walk(publicDir)) {
    const ext = path.extname(file).toLowerCase()
    if (!imageExts.includes(ext)) continue

    const rel = path.relative(publicDir, file)
    const cachePath = path.join(cacheDir, rel)
    const cacheDirPath = path.dirname(cachePath)

    if (fs.existsSync(cachePath)) {
      const origSize = fs.statSync(file).size
      const cacheSize = fs.statSync(cachePath).size
      if (cacheSize < origSize) continue
    }

    fs.mkdirSync(cacheDirPath, { recursive: true })

    const img = sharp(file)
    const opts = ext === '.png'
      ? { compressionLevel: 9 }
      : { quality: 80, mozjpeg: true }

    await img.jpeg(opts).toFile(cachePath)

    const origSize = fs.statSync(file).size
    const newSize = fs.statSync(cachePath).size
    if (newSize < origSize) {
      const pct = ((1 - newSize / origSize) * 100).toFixed(1)
      console.log(`  -${pct}%  ${rel}`)
      saved += origSize - newSize
      count++
    } else {
      fs.unlinkSync(cachePath)
    }
  }

  console.log(`\nDone. ${count} images optimized, ${(saved/1024/1024).toFixed(1)} MB saved in ${((Date.now()-start)/1000).toFixed(1)}s`)
}

optimize().catch(console.error)
