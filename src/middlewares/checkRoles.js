import { Student } from "../db/models/student.js";
import createHttpError from 'http-errors';

export const checkRoles = (...roles) => async (req, res, next) => {
  const user = req.user;
  const { studentId } = req.params;

  if (!user) {
    return next(createHttpError(401, 'User not authenticated'));
  }

  if (!roles.includes(user.role)) {
    return next(createHttpError(403, 'Forbidden'));
  }

  if (user.role === 'teacher') {
    return next();
  }

  if (user.role === 'parent') {
    try {
      const student = await Student.findOne({
        _id: studentId,
        parentId: user._id,
      });

      if (!student) {
        return next(createHttpError(403, 'This is not your child!'));
      }

      return next();
    } catch (error) {
      return next(error);
    }
  }

  return next(createHttpError(403, 'Role not supported'));
};
