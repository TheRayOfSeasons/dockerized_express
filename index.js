const express = require('express');
const app = new express();

app.get('/', (request, response) =>
{
  response.send('Hello po mga mam sir!');
});

app.listen(8000, () => console.log('API Started'));
