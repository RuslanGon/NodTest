import { Router } from 'express';
import studentRouter from './students.js';
import userRouter from './auth.js';

const rootRouter = Router();

rootRouter.use('students', studentRouter);
rootRouter.use('auth', userRouter);


export default rootRouter;


