const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require("socket.io")(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
      }
});

io.on('connection', (socket) => {
    const response = new Date();
    console.log('a user connected');
    socket.emit("chat client", response);
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

server.listen(9000, () => {
    console.log('listening on *:9000');
});