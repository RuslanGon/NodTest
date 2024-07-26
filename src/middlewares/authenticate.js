import createHttpError from 'http-errors';
import { Session } from '../db/models/session.js';


export const authenticate = async (req, res, next) => {
const header = req.get('Autorization');
if(!header){
throw createHttpError(401, 'Auth header is not provided');
}
const [bearer, token] = header.split(' ');

if(bearer !== 'Bearer' || !token ){
    throw createHttpError(401, 'Auth header should be of bearer type');
}

const session = await Session.findOne({
accessToken: token
});

if(!session){
    throw createHttpError(401, 'Auth header should be of bearer type');
}
};
