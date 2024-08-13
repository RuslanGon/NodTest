import swaggerUi from 'swagger-ui-express';
import createHttpError from 'http-errors';
import fs from 'node:fs/promises';
import path from 'node:path';

export const swagger = async () => {
  try {
    const swaggerFilePath = path.join(process.cwd(), 'docs', 'swagger.json');
    const swaggerFileContent = await fs.readFile(swaggerFilePath, 'utf-8');
    const swaggerDocument = JSON.parse(swaggerFileContent);

    return [swaggerUi.serve, swaggerUi.setup(swaggerDocument)];
  } catch (err) {
    console.error('Error reading Swagger file:', err);
    throw createHttpError(500, 'Swagger file is not found');
  }
};
