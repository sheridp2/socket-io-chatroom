const express = require('express');

const app = express();
const router = express.Router();

app.use(express.static('./public'));

server = app.listen(process.env.PORT || 3000)

const io = require("socket.io")(server)

io.on('connect', (socket) =>{
  socket.username = "Anonymous"

  socket.on('change_username', (data)=>{
    socket.username = data.username
  })

  socket.on('new_message', (data) =>{
    io.sockets.emit('new_message', {message : data.message, username : socket.username})
  })

  socket.on('typing', (data) =>{
    socket.broadcast.emit('typing', {username : socket.username})
  })
})
