import nodemailer from 'nodemailer';
import { ENV_VARS } from '../constants/index.js';
import { env } from '../utils/env.js';

const transport = nodemailer.createTransport({
  host: env(ENV_VARS),
  port: 587,
  auth: {
user: 'user',
pass: 'pass'
  }
});
