// import express module
const express = require('express');

// import 3-read-file-async
const students = require('./3-read_file_async');

// create an express app

const app = express();

app.get('/', (req, res) => {
  res.end('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const path = process.argv[2] || 'database.csv';
  await students(path)
    .then(() => {
      res.send('This is the list of our students');
    })
    .catch((error) => {
      console.log(`Error: ${error}`);
    });
});

app.listen(1245, () => {
  console.log('Server starting at http://localhost:1245');
});

module.exports = app;
