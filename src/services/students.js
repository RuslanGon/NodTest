import { Student } from "../db/models/student.js";
import createHttpError from 'http-errors';

export const getAllStudents = async () => {
return await Student.find({});
};

export const getStudentById = async (id) => {
const student =  await Student.findById(id);

if(!student){
   throw createHttpError(404, 'Student not found');
  }
  return student;
};

export const createStudent = async (payload) => {
  const student = await Student.create(payload);

  return student;
};

export const deleteStudentById = async (studentId) => {
await Student.findByIdAndDelete(studentId);
};

