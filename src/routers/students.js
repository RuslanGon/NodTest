import { Router } from "express";
import { createStudentController, deleteStudentByIdController, getStudentByIdController, getStudentsController } from "../controllers/students.js";
import { ctrlWrapper } from "../middlewares/ctrlWrapper.js";

const studentRouter = Router();


studentRouter.get('/students', ctrlWrapper(getStudentsController) );

studentRouter.get('/students/:studentId', ctrlWrapper(getStudentByIdController) );

studentRouter.post('/students', ctrlWrapper(createStudentController) );

studentRouter.delete('/students/:studentId', ctrlWrapper(deleteStudentByIdController) );



export default  studentRouter;
