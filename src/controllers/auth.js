import { createUser, loginUser } from "../services/auth.js";

export const registorUserController = async (req, res, next) => {
const user = await createUser(req.body);

res.json({
status: 200,
message: 'Uaser is create',
data: {user}
});
};


export const loginUserController = async (req, res, next) => {
  const session = await loginUser(req.body);

  res.cookie('sessionId', session._id, {
    httpOnly: true,
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 дней
  });

  res.cookie('sessionToken', session.refreshToken, {
    httpOnly: true,
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 дней
  });

  res.json({
    status: 200,
    message: 'Uaser is loggin in',
    data: { accessToken: session.accessToken },
  });
};
