import createHttpError from 'http-errors';
import { MongooseError } from 'mongoose';

export const errorHandlerMiddleware = (error, req, res, next) => {
  if (error instanceof createHttpError.HttpError) {
    return res.status(error.status).json({
      status: error.status,
      message: error.message,
    });
  }

  if (error instanceof MongooseError) {
    return res.status(500).json({
      status: 500,
      message: 'Mongoose error',
    });
  }

  res.status(500).json({
    status: 500,
    message: 'Internal Server Error',
  });
};
