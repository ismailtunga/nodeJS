const http = require('http');
const routes = require('./routes');

const server = http.createServer(routes);

server.listen(3333);

console.log('Server portu dinleniyor.... localhost:3333');