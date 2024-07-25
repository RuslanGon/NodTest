import joi from 'joi';

export const loginUserSchema = joi.object({
password: joi.string().required().min(2).max(12),
email: joi.string().required().email(),
});
