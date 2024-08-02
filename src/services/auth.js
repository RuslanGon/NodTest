import { User } from "../db/models/user.js";
import createHttpError from 'http-errors';
import jwt from 'jsonwebtoken';
import { env } from "../utils/env.js";
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import handlebars from 'handlebars';
import fs from 'node:fs/promises';
import path from 'node:path';
import { Session } from "../db/models/session.js";
import { ENV_VARS, TEMLATE_DIR } from "../constants/index.js";
import { sendMail } from "../utils/sendMail.js";



const createSession = () => {
  return {
    accessToken: crypto.randomBytes(10).toString('base64'),
    refreshToken: crypto.randomBytes(10).toString('base64'),
    accessTokenValidUntil: new Date(Date.now() + 15 * 60 * 1000), // 15 минут
    refreshTokenValidUntil: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 дней
  };
};

export const createUser = async (payload) => {
  const user = await User.findOne({ email: payload.email });

  if (user) {
    throw createHttpError(409, 'User with this email is already present in the database');
  }

  const hashedPassword = await bcrypt.hash(payload.password, 10);

  return await User.create({ ...payload, password: hashedPassword });
};

export const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw createHttpError(404, 'User not found');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw createHttpError(401, 'Invalid password');
  }

  await Session.deleteMany({ userId: user._id });

  return await Session.create({
    userId: user._id,
    ...createSession(),
  });
};

export const logoutUser = async ({ sessionId, sessionToken }) => {
  return await Session.deleteOne({
    _id: sessionId,
    refreshToken: sessionToken
  });
};

export const refreshSession = async ({ sessionId, sessionToken }) => {
  const session = await Session.findOne({
    _id: sessionId,
    refreshToken: sessionToken
  });

  if (!session) {
    throw createHttpError(401, 'Session not found');
  }

  if (new Date() > session.refreshTokenValidUntil) {
    throw createHttpError(401, 'Session has expired');
  }

  const user = await User.findById(session.userId);
  if (!user) {
    throw createHttpError(401, 'User associated with this session not found');
  }

  await Session.deleteOne({ _id: sessionId });

  return await Session.create({
    userId: user._id,
    ...createSession(),
  });
};

export const resetRequestPasswordEmail = async (email) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw createHttpError(404, 'User not found');
  }

  const token = jwt.sign({
    sub: user._id,
    email
  },
    env(ENV_VARS.JWT_SECRET),
    { expiresIn: '5m' }
  );


  const templateSource = await fs.readFile(
    path.join(TEMLATE_DIR, 'reset-password-email.html'),
  );

const template = handlebars.compile(templateSource.toString());

const html = template({
  name: user.name,
  link: `http://yourdomain.com/reset-password?token=${token}`
});

try{
  await sendMail({
    html,
    to: email,
    from: env(ENV_VARS.SMTP_USER),
    subject: 'Reset your password',
  });
}catch(err){
console.log(err);
throw createHttpError(500, 'Problem with sending emails');
}

};

export const resetPassword = async ({token, password}) => {
let tokenPayload;

try{
 tokenPayload = jwt.verify(token, env(ENV_VARS.JWT_SECRET));
}catch(err){
  throw createHttpError(401, err.message);
}

const hashedPassword = await bcrypt.hash(password, 10);

await User.findOneAndUpdate({
  _id: tokenPayload.sub,
  email: tokenPayload.email
},
{ password: hashedPassword}
);
};
