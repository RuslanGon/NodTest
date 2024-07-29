import { Student } from "../db/models/student.js";
import createHttpError from 'http-errors';

export const checkRoles = (...roles) => async (req, res, next) => {
const user = req.user;
const {studentId} = req.params;
if(roles.includes('teacher') && user.role === 'teacher'){
return next();
}

if(roles.includes('parent') && user.role === 'parent'){
    const student = await Student.find({
    id: studentId,
    parentId: user._id
});

if(!student){
return next(createHttpError(403, 'This is not you child!'));
}
next();
}
};
