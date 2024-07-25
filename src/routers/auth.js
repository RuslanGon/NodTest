import { Router } from 'express';
import { ctrlWrapper } from '../middlewares/ctrlWrapper.js';
import { registorUserController } from '../controllers/auth.js';
import { validationBody } from '../middlewares/validationBody.js';
import { registorUserSchema } from '../validation/registorUserSchema.js';

const userRouter = Router();

userRouter.post('/registor', validationBody(registorUserSchema), ctrlWrapper(registorUserController));

userRouter.post('/login',);

userRouter.post('/refresh-token',);

userRouter.post('/logout');


export default userRouter;


