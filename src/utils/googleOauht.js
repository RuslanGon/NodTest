import { OAuth2Client } from 'google-auth-library';
import fs from 'node:fs';
import path from 'node:path';
import { env } from './env.js';
import { ENV_VARS } from '../constants/index.js';

const googleConfig = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), 'google.json')).toString(),
);

const client = new OAuth2Client({
clientId: env(ENV_VARS.GOOGLE_CLIENT_ID),
clientSecret: env(ENV_VARS.GOOGLE_CLIENT_SECRET),
project_id: ''
});
