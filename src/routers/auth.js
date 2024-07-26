import { Router } from 'express';
import { ctrlWrapper } from '../middlewares/ctrlWrapper.js';
import { loginUserController, logoutController, registorUserController } from '../controllers/auth.js';
import { validationBody } from '../middlewares/validationBody.js';
import { registorUserSchema } from '../validation/registorUserSchema.js';
import { loginUserSchema } from '../validation/loginUserSchema.js';

const userRouter = Router();

userRouter.post('/registor', validationBody(registorUserSchema), ctrlWrapper(registorUserController));

userRouter.post('/login', validationBody(loginUserSchema),
ctrlWrapper(loginUserController));

userRouter.post('/refresh-token',);

userRouter.post('/logout', ctrlWrapper(logoutController));


export default userRouter;


