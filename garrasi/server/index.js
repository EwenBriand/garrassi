const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
      origin: 'http://localhost:3000',
      methods: ['GET', 'POST'],
    },
  });

server.listen(4000, () => 'Server is running on port 4000');
