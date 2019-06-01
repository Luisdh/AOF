const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const server = express();
const port = 5000;

server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));
server.use(cors());

server.listen(port, () => {
  console.log(`=== Server running on ${port} ===`);
});

module.exports = { server };
