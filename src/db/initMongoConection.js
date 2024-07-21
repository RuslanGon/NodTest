import mongoose from "mongoose";
import { env } from '../utils/env.js';
import { ENV_WARS } from "../constants/index.js";

export const initMongoConection = () => {
const conectionLink = `mongodb+srv://${env(ENV_WARS.MONGODB_USER)}:<password>@cluster0.9yeu1fb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
};
