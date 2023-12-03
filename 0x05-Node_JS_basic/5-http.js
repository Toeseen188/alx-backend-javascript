const http = require('http');

const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  // set the header
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    // if url is '/'
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    // respond if url is '/students'

    const path = process.argv[2] || './database.csv';
    countStudents(path)
      .then(() => {
        res.end('This is the list of our students');
      })
      .catch((error) => {
        res.end(`Error: ${error}`);
      });
  } else {
    res.end('Not found\n');
  }
});
// set port number
const PORT = 1245;

// start a server

app.listen(PORT, () => {
  console.log(`Server starting at http://localhost:${PORT}`);
});

module.exports = app;
