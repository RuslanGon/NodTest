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


const studentRouter = Router();

studentRouter.get('/students', ctrlWrapper(getStudentsController));

studentRouter.get(
  '/students/:studentId',
  validationMongoId('studentId'),
  ctrlWrapper(getStudentByIdController),
);

studentRouter.post(
'/students', ctrlWrapper(createStudentController)
);

studentRouter.patch(
  '/students/:studentId',
  validationMongoId('studentId'),
  ctrlWrapper(patchStudentController),
);

studentRouter.put(
  '/students/:studentId',
  validationMongoId('studentId'),
  ctrlWrapper(putStudentController),
);

studentRouter.delete(
  '/students/:studentId',
  validationMongoId('studentId'),
  ctrlWrapper(deleteStudentByIdController),
);

export default studentRouter;
