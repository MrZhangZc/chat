const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)

app.get('/', (req, res) =>{
  res.sendFile(__dirname + '/index.html')
})

io.on('connection', socket =>{
  socket.on('chat message', function(msg){
    console.log('message: ' + msg)
    io.emit('chat message', msg)
  })
})

http.listen(5656, () =>{
  console.log('success: 5656 ')
})