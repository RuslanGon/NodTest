import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import { env } from './utils/env.js';
import { ENV_VARS } from './constants/index.js';
import { errorHandlerMiddleware } from './middlewares/errorHandlerMiddleware.js';
import { notFoundMiddleware } from './middlewares/notFoundMiddleware.js';


export const startServer = () => {

const app = express();

app.use(pino({
  transport: {
    target: 'pino-pretty'
  }
}
));

app.use(cors());

app.get('/', (req, res, next) => {
res.send('Hello Ruslan');
});

app.use(notFoundMiddleware);

app.use(errorHandlerMiddleware);


const PORT = env(ENV_VARS.PORT, 3000);
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
  });

};
