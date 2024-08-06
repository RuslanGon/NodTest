import { env } from '../utils/env.js';
import { ENV_VARS } from '../constants/index.js';
import { saveToCloudinary } from './saveToCloudinary.js';
import { saveFileToLS } from './saveFileToLS.js';

export const saveFile = async (file) => {
  let url;

  if (env(ENV_VARS.IS_CLOUDINARY_ENABLED) === 'true') {
    url = await saveToCloudinary(file);
  } else {
    url = await saveFileToLS(file);
  }

  return url;
};
