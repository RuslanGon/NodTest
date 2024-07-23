import { Student } from "../db/models/student.js";
import createHttpError from 'http-errors';

export const createPaginationInformation = (page, perPage, count) => {
  const totalPages = Math.ceil(count / perPage);
  const hasNextPage = page < totalPages;
  const hasPreviousPage = page > 1;

  return {
    page,
    perPage,
    totalItems: count,
    totalPages,
    hasPreviousPage,
    hasNextPage,
  };
};

export const getAllStudents = async ({
  page = 1,
  perPage = 5,
  sortBy = '_id',
  sortOrder = 'asc',
  filter = {}
}) => {
const skip = (page - 1) * perPage;

const studentsQuery = Student.find();

if (filter.minAge) {
  studentsQuery.where('age').gte(filter.minAge);
}
if (filter.maxAge) {
  studentsQuery.where('age').lte(filter.maxAge);
}
if (filter.minAvgMark) {
  studentsQuery.where('avgMark').gte(filter.minAvgMark);
}
if (filter.maxAvgMark) {
  studentsQuery.where('avgMark').lte(filter.maxAvgMark);
}
if (filter.gender) {
  studentsQuery.where('gender').equals(filter.gender);
}
if (filter.onDuty !== undefined) {
  studentsQuery.where('onDuty').equals(filter.onDuty);
}


  const [studentsCount, students] = new Promise.all([
    Student.find().countDocuments(),
    Student.find({}).skip(skip).limit(perPage).sort({
      [sortBy]: sortOrder,
    }),
  ]);

  const paginationInformation = createPaginationInformation(page, perPage, studentsCount);
  return {
    students,
    ...paginationInformation
  };
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

export const upsertStudent = async (id, payload, options = {}) => {
  const rawResult = await Student.findByIdAndUpdate(id, payload, {
    new: true, // Возвращает обновленный документ
    ...options, // Создает документ, если он не существует
    includeResultMetadata: true,
    runValidators: true, // Запускает валидаторы для полей
  });
  return {
    student: rawResult.value,
    isNew: !rawResult?.lastErrorObject?.updatedExisting,
  };
};

