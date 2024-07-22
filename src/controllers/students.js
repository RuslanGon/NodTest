import { getAllStudents, getStudentById } from "../services/students.js";


export const getStudentsController = async (req, res) => {
    const students = await getAllStudents();
    res.json({
     status: 200,
     message: 'Successful get all students',
     data: students
    });
   };

export const getStudentByIdController = async (req, res) => {
    const id = req.params.studentId;
  const student = await getStudentById(id);

  if(!student){
    res.status(404).json({
      status: 404,
      message: 'not found student by id',
     });
  }

  res.json({
    status: 200,
    message: 'Successful get student by id',
    data: student
   });
  };

