import createHttpError from 'http-errors';


export const authenticate = (req, res, next) => {
const header = req.get('Autorization');
if(!header){
throw createHttpError(401, 'Auth header is not provided')
}
const [bearer, token] = header.split(' ');
};
