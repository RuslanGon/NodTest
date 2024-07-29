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
import { authenticate } from '../middlewares/authenticate.js';
import { checkRoles } from '../middlewares/checkRoles.js';

const studentRouter = Router();

studentRouter.use('/:studentId', validationMongoId('studentId'));
studentRouter.use('/', authenticate);


studentRouter.get('/',
ctrlWrapper(getStudentsController));

studentRouter.get(
  '/:studentId',
  ctrlWrapper(getStudentByIdController),
);

studentRouter.post(
  '/',
  validationBody(createStudentSchema),
  ctrlWrapper(createStudentController),
);

studentRouter.patch(
  '/:studentId',
  checkRoles('teacher', 'parent'),
  validationBody(updateStudentSchema),
  ctrlWrapper(patchStudentController),
);

studentRouter.put('/:studentId',
ctrlWrapper(putStudentController));

studentRouter.delete(
  '/:studentId',
  ctrlWrapper(deleteStudentByIdController),
);

export default studentRouter;
