/**
 * Optimise les images raster dans public/images (compression, redimensionnement si très large).
 * Exécution : npm run optimize-images
 */
import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'public', 'images');

const MAX_WIDTH = 2560;
const JPEG_QUALITY = 82;
const WEBP_QUALITY = 82;
const WEBP_QUALITY_HIGH = 88;
const AVIF_QUALITY = 55;

const RASTER_EXT = new Set(['.jpg', '.jpeg', '.jfif', '.png', '.webp', '.avif']);

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) files.push(...(await walk(full)));
    else files.push(full);
  }
  return files;
}

async function optimizeBuffer(p, ext) {
  switch (ext) {
    case '.jpg':
    case '.jpeg':
    case '.jfif':
      return p.jpeg({ quality: JPEG_QUALITY, mozjpeg: true, progressive: true }).toBuffer();
    case '.png':
      return p.png({ compressionLevel: 9, effort: 10 }).toBuffer();
    case '.webp':
      return p.webp({ quality: WEBP_QUALITY, effort: 6 }).toBuffer();
    case '.avif':
      return p.avif({ quality: AVIF_QUALITY, effort: 6 }).toBuffer();
    default:
      return null;
  }
}

async function main() {
  const allFiles = await walk(ROOT);
  const before = await Promise.all(
    allFiles.filter((f) => RASTER_EXT.has(path.extname(f).toLowerCase())).map(async (f) => ({ f, s: (await fs.stat(f)).size })),
  );
  const beforeSum = before.reduce((a, x) => a + x.s, 0);

  for (const absPath of allFiles) {
    const ext = path.extname(absPath).toLowerCase();
    if (!RASTER_EXT.has(ext)) continue;

    const base = path.basename(absPath);
    const input = await fs.readFile(absPath);
    const meta = await sharp(input, { failOn: 'none' }).metadata();
    let pipeline = sharp(input, { failOn: 'none' }).rotate();

    if (meta.width && meta.width > MAX_WIDTH) {
      pipeline = pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true, fit: 'inside' });
    }

    // Logo : WebP avec bonne qualité pour la transparence
    if (base === 'logo.png') {
      const buf = await pipeline.webp({ quality: WEBP_QUALITY_HIGH, effort: 6, alphaQuality: 100 }).toBuffer();
      const out = path.join(path.dirname(absPath), 'logo.webp');
      await fs.writeFile(out, buf);
      await fs.unlink(absPath);
      console.log(`logo.png → logo.webp (${(buf.length / 1024).toFixed(1)} Ko)`);
      continue;
    }

    // Photo PNG lourde : WebP
    if (base === 'culture-content.png') {
      const buf = await pipeline.webp({ quality: WEBP_QUALITY, effort: 6 }).toBuffer();
      const out = absPath.replace(/\.png$/i, '.webp');
      await fs.writeFile(out, buf);
      await fs.unlink(absPath);
      try {
        await fs.unlink(path.join(path.dirname(absPath), 'culture-content.jfif'));
      } catch {
        /* absent */
      }
      console.log(`culture-content.png → .webp (${(buf.length / 1024).toFixed(1)} Ko)`);
      continue;
    }

    // JFIF : WebP (meilleur ratio, même usage que JPEG)
    if (ext === '.jfif') {
      const buf = await pipeline.webp({ quality: WEBP_QUALITY, effort: 6 }).toBuffer();
      const out = absPath.replace(/\.jfif$/i, '.webp');
      await fs.writeFile(out, buf);
      await fs.unlink(absPath);
      console.log(`${base} → ${path.basename(out)} (${(buf.length / 1024).toFixed(1)} Ko)`);
      continue;
    }

    const buf = await optimizeBuffer(pipeline, ext);
    if (!buf) continue;
    await fs.writeFile(absPath, buf);
    console.log(`Optimisé : ${path.relative(ROOT, absPath)} (${(buf.length / 1024).toFixed(1)} Ko)`);
  }

  const afterFiles = await walk(ROOT);
  const after = await Promise.all(
    afterFiles.filter((f) => RASTER_EXT.has(path.extname(f).toLowerCase())).map(async (f) => ({ f, s: (await fs.stat(f)).size })),
  );
  const afterSum = after.reduce((a, x) => a + x.s, 0);
  console.log(`\nTotal images : ${(beforeSum / 1024 / 1024).toFixed(2)} Mo → ${(afterSum / 1024 / 1024).toFixed(2)} Mo`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
