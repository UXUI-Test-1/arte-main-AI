// 사용법: npm run build  →  dist/ 폴더 생성 (index.html + bundle.js + assets/)
import {build} from 'esbuild';
import fs from 'node:fs';

const out = 'dist';
fs.rmSync(out, {recursive: true, force: true});
fs.mkdirSync(out, {recursive: true});

await build({
  entryPoints: ['src/main.jsx'],
  outfile: `${out}/bundle.js`,
  bundle: true,
  minify: true,
  format: 'iife',
  loader: {'.jsx': 'jsx'},
  define: {'process.env.NODE_ENV': '"production"'},
  logLevel: 'info',
});

fs.copyFileSync('index.html', `${out}/index.html`);
fs.cpSync('assets', `${out}/assets`, {recursive: true});
console.log('done →', out);
