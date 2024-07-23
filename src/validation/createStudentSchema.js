import joi from 'joi';

// name: {type: String, required: true},
//     age: {type: Number, required: true},
//     gender: {type: String, required: true, enum: ['male', 'female', 'other']},
//     avgMark: {type: Number, required: true, min: 1, max: 12},
//     onDuty: {type: Boolean, default: false}

export const createStudentSchema = joi.object({
name: joi.string().required().min(2).max(17),
age: joi.number().integer().required().min(14).max(77),
gender: joi.string().required().valid('male', 'female', 'other'),
avgMark: joi.number().required().min(1).max(17),
onDuty: joi.boolean(),
});
