import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import { env } from './utils/env.js';
import { ENV_VARS } from './constants/index.js';
import { errorHandlerMiddleware } from './middlewares/errorHandlerMiddleware.js';
import { notFoundMiddleware } from './middlewares/notFoundMiddleware.js';
import rootRouter from './routers/index.js';
import cookiesParser from 'cookie-parser';



export const startServer = () => {

const app = express();

app.use(cookiesParser());

app.use(pino({
  transport: {
    target: 'pino-pretty'
  }
}
));

app.use(cors());

app.use(express.json({
type: ['application/json', 'application/vnd.api+json']
}));

app.use(rootRouter);

app.use(notFoundMiddleware);

app.use(errorHandlerMiddleware);


const PORT = env(ENV_VARS.PORT, 3000);
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
  });

};
