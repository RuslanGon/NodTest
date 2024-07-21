import express from 'express';
import pino from 'pino-http';
import cors from 'cors';

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

app.use('*', (req, res) => {
res.status(400).send('Oops! Route is not found');
});

app.listen(3000, () => {
    console.log('server is running on port 3000');
  });



