import fs from 'node:fs/promises';
import path from 'node:path';
import { UPLOAD_DIR } from '../constants/index.js';

export const saveFileToLS = async (file) => {
const content = await fs.readFile(file.path);
const newPath = path.join(UPLOAD_DIR, file.filename);
await fs.writeFile(newPath, content);
return 'url';
};
