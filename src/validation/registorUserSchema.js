import joi from 'joi';

export const registorUserSchema = joi.object({
name: joi.string().required(),
password: joi.string().required().min(2).max(12),
email: joi.string().required().email(),
});
