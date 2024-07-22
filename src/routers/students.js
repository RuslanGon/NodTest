import { Router } from "express";
import { getStudentByIdController, getStudentsController } from "../controllers/students.js";
import { ctrlWrapper } from "../middlewares/ctrlWrapper.js";

const studentRouter = Router();


studentRouter.get('/students', ctrlWrapper(getStudentsController) );

studentRouter.get('/students/:studentId', ctrlWrapper(getStudentByIdController) );

export default  studentRouter;
