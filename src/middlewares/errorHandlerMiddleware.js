import createHttpError from 'http-errors';

export const errorHandlerMiddleware = (error, req, res, next) => {
  if (error instanceof createHttpError.HttpError) {
    return res.status(error.status).json({
      status: error.status,
      message: error.message,
    });
  } else {
    res.status(500).json({
      status: 500,
      message: 'Internal Server Error',
    });
  }
};
