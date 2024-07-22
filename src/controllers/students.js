import { createStudent, getAllStudents, getStudentById } from "../services/students.js";


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

  res.json({
    status: 200,
    message: 'Successful get student by id',
    data: student
   });
  };


  export const createStudentController = async (req, res) => {
    const { body} = req.params.studentId;
  const student = await createStudent(body);

  res.status(201).json({
    status: 201,
    message: 'Successful create student',
    data: student
   });
  };
