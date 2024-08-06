import path from 'node:path';

export const ENV_VARS = {
PORT: 'PORT',
MONGODB_USER: 'MONGODB_USER',
MONGODB_PASSWORD: 'MONGODB_PASSWORD',
MONGODB_URL: 'MONGODB_URL',
MONGODB_DB: 'MONGODB_DB',

SMTP_HOST: 'SMTP_HOST',
SMTP_PORT: 'SMTP_PORT',
SMTP_USER: 'SMTP_USER',
SMTP_PASSWORD: 'SMTP_PASSWORD',

SMTP_FROM: 'SMTP_FROM',
JWT_SECRET: 'JWT_SECRET',
APP_DOMAIN: 'APP_DOMAIN',
CLOUD_NAME: 'CLOUD_NAME',
API_KEY: 'API_KEY',
API_SECRET: 'API_SECRET',

IS_CLOUDINARY_ENABLED:'IS_CLOUDINARY_ENABLED',

};


export const TEMLATE_DIR = path.join(process.cwd(), 'src', 'temlates');

export const TEMPLATE_UPLOAD_DIR = path.join(process.cwd(), 'temp');

export const UPLOAD_DIR = path.join(process.cwd(), 'upload');


