import joi from 'joi';

export const resetRequestEmailSchema = joi.object({
email: joi.string().required().email()
});
