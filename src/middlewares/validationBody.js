import createHttpError from 'http-errors';

export const validationBody = (schema) => async (req, res, next) => {
  try {
    await schema.validationAsync(req.body, {abortEarly: false, covert: false});
    next();
  } catch (err) {
    next(
      createHttpError(400, 'Bad request', {
        errors: err.details,
      }),
    );
  }
};
