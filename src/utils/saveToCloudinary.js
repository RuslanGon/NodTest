import { v2 as cloudinary } from 'cloudinary';
import { env } from '../utils/env.js';
import { ENV_VARS } from '../constants/index.js';

cloudinary.config({
    cloud_name: env(ENV_VARS.CLOUD_NAME),
    api_key: env(ENV_VARS.API_KEY),
    api_secret: env(ENV_VARS.API_SECRET) // Click 'View Credentials' below to copy your API secret
});


export const saveToCloudinary = (file) => {
return 'url';
};
