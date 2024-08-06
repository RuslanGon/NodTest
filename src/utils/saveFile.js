import { env } from '../utils/env.js';
import { ENV_VARS } from '../constants/index.js';
import { saveToCloudinary } from './saveToCloudinary.js';

export const saveFile = async (file) => {
  let url;

  if (env(ENV_VARS.IS_CLOUDINARY_ENABLED)) {
    url = await saveToCloudinary;
  }

  return url;
};
