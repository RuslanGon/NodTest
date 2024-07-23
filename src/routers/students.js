import { Router } from 'express';
import {
  createStudentController,
  deleteStudentByIdController,
  getStudentByIdController,
  getStudentsController,
  patchStudentController,
  putStudentController,
} from '../controllers/students.js';
import { ctrlWrapper } from '../middlewares/ctrlWrapper.js';
import { validationMongoId } from '../middlewares/validationMongoId.js';
import { validationBody } from '../middlewares/validationBody.js';
import { createStudentSchema } from '../validation/createStudentSchema.js';
import { updateStudentSchema } from '../validation/updateStudentSchema.js';

const studentRouter = Router();
studentRouter.use('/students/:studentId', validationMongoId('studentId'));


studentRouter.get('/students',
ctrlWrapper(getStudentsController));

studentRouter.get(
  '/students/:studentId',
  ctrlWrapper(getStudentByIdController),
);

studentRouter.post(
  '/students',
  validationBody(createStudentSchema),
  ctrlWrapper(createStudentController),
);

studentRouter.patch(
  '/students/:studentId',
  validationBody(updateStudentSchema),
  ctrlWrapper(patchStudentController),
);

studentRouter.put('/students/:studentId',
ctrlWrapper(putStudentController));

studentRouter.delete(
  '/students/:studentId',
  ctrlWrapper(deleteStudentByIdController),
);

export default studentRouter;
