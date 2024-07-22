import { Router } from "express";
import { getStudentByIdController, getStudentsController } from "../controllers/students.js";

const studentRouter = Router();


studentRouter.get('/students', getStudentsController);


studentRouter.get('/students/:studentId', getStudentByIdController );

export default  studentRouter;
