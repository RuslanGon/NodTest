import { createUser, loginUser, logoutUser, refreshSession } from "../services/auth.js";

export const registorUserController = async (req, res, next) => {
const user = await createUser(req.body);

res.json({
status: 200,
message: 'User is create',
data: {user}
});
};


export const loginUserController = async (req, res, next) => {
  const session = await loginUser(req.body);

  res.cookie('sessionId', session._id, {
    httpOnly: true,
    expire: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 дней
  });

  res.cookie('sessionToken', session.refreshToken, {
    httpOnly: true,
    expire: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 дней
  });

  res.json({
    status: 200,
    message: 'User is loggin in',
    data: { accessToken: session.accessToken },
  });
};


export const logoutController = async (req, res, next) => {

  await logoutUser({
    sessionId : req.cookies.sessionId,
    sessionToken: req.cookies.sessionToken
  });

  res.clearCookie('sessionId');

  res.clearCookie('sessionToken');

  res.status(204).json({
    status: 204,
    message: 'User is logging out',
    data: {},
  });
};


export const refreshTokenController = async (req, res, next) => {
const {sessionId, sessionToken} = req.cookies;
const session =  await refreshSession({sessionId, sessionToken});

res.cookie('sessionId', session._id, {
  httpOnly: true,
  expire: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 дней
});

res.cookie('sessionToken', session.refreshToken, {
  httpOnly: true,
  expire: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 дней
});

res.json({
  status: 200,
  message: 'User is loggin in',
  data: { accessToken: session.accessToken },
});
};

