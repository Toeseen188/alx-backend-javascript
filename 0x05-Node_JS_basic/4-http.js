const http = require('http');

const app = http.createServer((req, res) => {
  // set the header for the response
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // set response to the client
  res.end('Hello Holberton School!');
});

// set port number
const PORT = 1245;

// start the server

app.listen(PORT, () => {
  console.log(`server is starting at http://localhost:${PORT}`);
});

module.exports = app;
