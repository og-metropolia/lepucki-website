import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(
    'Do you have time to talk about the miracle of Elisa saunalahti prices?'
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
