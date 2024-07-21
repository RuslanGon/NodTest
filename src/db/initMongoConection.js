import mongoose from 'mongoose';
import { env } from '../utils/env.js';
import { ENV_WARS } from '../constants/index.js';

export const initMongoConection = async () => {
  const conectionLink = `mongodb+srv://
  ${env(ENV_WARS.MONGODB_USER)}:
  ${env(ENV_WARS.MONGODB_PASSWORD)}@
  ${env(ENV_WARS.MONGODB_URL)}/${env(ENV_WARS.MONGODB_DB)}
  ?retryWrites=true&w=majority&appName=Cluster0`;

  try {
    await mongoose.connect(conectionLink);
  } catch (err) {
    console.log(err);
  }
};
