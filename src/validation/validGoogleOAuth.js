import joi from 'joi';

export const validGoodleOAuthSchema = joi.object({
code: joi.string().required(),
});
