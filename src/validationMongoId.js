import { Types } from 'mongoose';
import createHttpError from 'http-errors';

export const validationMongoId = (req, res, next) => {
  const id = req.params.studentId;

  if (!Types.ObjectId.isValid(id)) {
    return next(createHttpError(400, 'Invalid id'));
  }

  next();
};
