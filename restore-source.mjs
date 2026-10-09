import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const files = JSON.parse(fs.readFileSync(new URL('./source-bundle.json', import.meta.url), 'utf8'));
for (const file of files) {
  const target = path.resolve(root, file.path);
  if (!target.startsWith(root + path.sep)) throw new Error('Invalid source path');
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, file.content, 'utf8');
}
