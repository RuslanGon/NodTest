import joi from 'joi';

export const resetPasswordSchema = joi.object({
password: joi.string().required().min(2).max(12),
token: joi.string().required()
});
