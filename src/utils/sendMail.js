import nodemailer from 'nodemailer';
import { ENV_VARS } from '../constants/index.js';

const transport = nodemailer.createTransport({
  host: ENV_VARS,
  port: 587,
  auth: {
user: 'user',
pass: 'pass'
  }
});
