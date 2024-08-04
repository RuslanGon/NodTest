import fs from 'node:fs/promises';
import path from 'node:path';
import { UPLOAD_DIR } from '../constants/index.js';

export const saveFileToLS = async (file) => {
  // Чтение содержимого файла с оригинального пути
  const content = await fs.readFile(file.path);

  // Создание нового пути для файла в директории UPLOAD_DIR
  const newPath = path.join(UPLOAD_DIR, file.filename);

  // Запись содержимого в новый файл
  await fs.writeFile(newPath, content);

  return newPath;
};
