const server = require('express')();

const ALWAYS = 'valor';

console.log(ALWAYS);

// eslint-disable-next-line no-unused-vars
server.get('/', function (req, res) {});

server.listen(3000);
