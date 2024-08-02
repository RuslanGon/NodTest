import { createUser, loginUser, logoutUser, refreshSession, resetRequestPasswordEmail } from "../services/auth.js";

const setudSessionCookies = (res, session) => {
  res.cookie('sessionId', session._id, {
    httpOnly: true,
    expire: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 дней
  });

  res.cookie('sessionToken', session.refreshToken, {
    httpOnly: true,
    expire: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 дней
  });
};


export const registorUserController = async (req, res) => {
const user = await createUser(req.body);

res.json({
status: 200,
message: 'User is create',
data: {user}
});
};


export const loginUserController = async (req, res) => {
  const session = await loginUser(req.body);

  setudSessionCookies(res, session);

  res.json({
    status: 200,
    message: 'User is loggin in',
    data: { accessToken: session.accessToken },
  });
};


export const logoutController = async (req, res) => {

  await logoutUser({
    sessionId : req.cookies.sessionId,
    sessionToken: req.cookies.sessionToken
  });

  res.clearCookie('sessionId');
  res.clearCookie('sessionToken');

  res.status(204).send();
};


export const refreshTokenController = async (req, res) => {
const {sessionId, sessionToken} = req.cookies;
const session =  await refreshSession({sessionId, sessionToken});

setudSessionCookies(res, session);

res.json({
  status: 200,
  message: 'Token refreshed successfully',
  data: { accessToken: session.accessToken },
});
};

export const resetRequestEmail = async (req, res) => {
await resetRequestPasswordEmail(req.body.email);

res.json({
  status: 200,
  message: 'Reset password email was successfuly send',
  data: {},
});
};


export const resetPasswordController = async (req, res) => {
  await resetRequestPasswordEmail(req.body.email);

  res.json({
    status: 200,
    message: 'Reset password email was successfuly send',
    data: {},
  });
  };
