import { createStudent, deleteStudentById, getAllStudents, getStudentById, upsertStudent } from "../services/students.js";


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


  export const deleteStudentByIdController = async (req, res) => {
    const id = req.params.studentId;
    await deleteStudentById(id);

    res.status(204);
  };


  export const patchStudentController = async (req, res) => {
    const { body } = req;
    const { studentId } = req.params;
  const student = await upsertStudent(studentId, body);

  res.status(200).json({
    status: 200,
    message: 'Successful patched student',
    data: student
   });
  };



  export const putStudentController = async (req, res) => {
    const { body } = req;
    const { studentId } = req.params;
  const student = await upsertStudent(studentId, body, { upsert: true });

  res.status(200).json({
    status: 200,
    message: 'Successful patched student',
    data: student
   });
  };

