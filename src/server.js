import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import { env } from './utils/env.js';


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

app.use((req, res,) => {
res.status(404).send('Oops! Route is not found');

});


const PORT = env('PORT', 3000);
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
  });

};
