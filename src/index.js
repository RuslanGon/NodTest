import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log('Hello Ruslan');
});

app.get('/', (req, res, next) => {
res.send('Hello Ruslan');
});

app.listen(3000, () => {
    console.log('server is running on port 3000');
  });



