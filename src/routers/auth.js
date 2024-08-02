import { Router } from 'express';
import { ctrlWrapper } from '../middlewares/ctrlWrapper.js';
import {
  loginUserController,
  logoutController,
  refreshTokenController,
  registorUserController,
  resetPasswordController,
  resetRequestEmail,
} from '../controllers/auth.js';
import { validationBody } from '../middlewares/validationBody.js';
import { registorUserSchema } from '../validation/registorUserSchema.js';
import { loginUserSchema } from '../validation/loginUserSchema.js';
import { resetRequestEmailSchema } from '../validation/resetRequestEmail.js';
import { resetPasswordSchema } from '../validation/resetPasswordSchema.js';

const userRouter = Router();

userRouter.post(
  '/registor',
  validationBody(registorUserSchema),
  ctrlWrapper(registorUserController),
);

userRouter.post(
  '/login',
  validationBody(loginUserSchema),
  ctrlWrapper(loginUserController),
);

userRouter.post('/refresh-token',
ctrlWrapper(refreshTokenController));

userRouter.post('/logout',
ctrlWrapper(logoutController));

userRouter.post(
  '/request-reset-password-email',
  validationBody(resetRequestEmailSchema),
  ctrlWrapper(resetRequestEmail),
);

userRouter.post(
  '/reset-password',
  validationBody(resetPasswordSchema),
  ctrlWrapper(resetPasswordController),
);

export default userRouter;
