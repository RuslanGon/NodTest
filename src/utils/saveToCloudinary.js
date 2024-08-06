import { v2 as cloudinary } from 'cloudinary';
import { env } from '../utils/env.js';
import { ENV_VARS } from '../constants/index.js';
import fs from 'node:fs/promises';

cloudinary.config({
    cloud_name: env(ENV_VARS.CLOUD_NAME),
    api_key: env(ENV_VARS.API_KEY),
    api_secret: env(ENV_VARS.API_SECRET)
});


export const saveToCloudinary = async (file) => {
  const content = await fs.readFile(file.path);

  const res = await cloudinary.upload(content);
  return res.secure_url;
};
