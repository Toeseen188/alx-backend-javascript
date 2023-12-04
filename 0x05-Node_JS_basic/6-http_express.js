// import express module
const express = require('express');

// call the express module and create express app
const app = express();

// get a string when routing '/'
app.get('/', (req, res) => {
  res.end('Hello Holberton School!');
});

// set a port number
const PORT = 1245;

app.listen(PORT, () => {
  console.log('...');
});

module.exports = app;
