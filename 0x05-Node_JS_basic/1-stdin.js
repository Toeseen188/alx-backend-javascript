const readline = require('readline');

const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log('Welcome to Holberton School, what is your name?');

r.on('line', (data) => {
  console.log(`Your name is: ${data}`);
});

r.on('close', () => {
  console.log('This important software is now closing');
});
