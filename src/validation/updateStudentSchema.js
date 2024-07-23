import joi from 'joi';

export const updateStudentSchema = joi.object({
name: joi.string().min(2).max(17),
age: joi.number().integer().min(14).max(77),
gender: joi.string().valid('male', 'female', 'other'),
avgMark: joi.number().min(1).max(17),
onDuty: joi.boolean(),
});
