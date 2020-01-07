const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = require('./route.js'); // imports the routing file

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
