import { User } from "../db/models/user.js";
import createHttpError from 'http-errors';
import bcrypt from 'bcrypt';

export const createUser = async (payload) => {

  const user = await User.findOne({email: payload.email});

  if(!user){
    throw createHttpError(409, 'User with email is ready present in database');
  }


const hashedPassword = await bcrypt.hash(payload.password, 10);

return await User.create({...payload, password: hashedPassword});
};


export const loginUser = async ({email, password}) => {
const user = await User.findOne({email});
if(!user){
    throw createHttpError(404, 'User not found');
}

const isPasswordValid = await user.comparePassword(password, user.password);
if (!isPasswordValid) {
  throw createHttpError(401, 'Invalid password');
}

return user;
};
