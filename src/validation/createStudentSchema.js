import joi from 'joi';

export const createStudentSchema = joi.object({
name: joi.string().required().min(2).max(17),
age: joi.number().integer().required().min(14).max(77),
gender: joi.string().required().valid('male', 'female', 'other'),
avgMark: joi.number().required().min(1).max(17),
onDuty: joi.boolean(),
});
