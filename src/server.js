const http = require('http');
const router = require('./router');

const server = http.createServer(router);
const hostname = process.env.HOSTNAME || 'localhost';
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`the site is running on http://${hostname}:${port} enjoy :D `);
})