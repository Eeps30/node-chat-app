const path = require('path')
const http = require('http')
const express = require('express')
const socketIO = require('socket.io')

//this module helps to change the path that the express 
//server takes so that instead of going into 'server', back out of 
//'server' and then into 'public', it starts up at 'node-chat-app'
//and then straight into public.
const publicPath = path.join(__dirname, '../public')
const port = process.env.PORT || 3000
var app = express()
var server = http.createServer(app)
var io = socketIO(server)

app.use(express.static(publicPath))

io.on('connection', (socket) => {
    console.log('New user connected')

    socket.on('createMessage', (message) => {
        console.log('createMessage: ', message)
    })

    socket.emit('newMessage', {
        from: 'John',
        text: 'See you then!',
        createdAt: 123123
    })

    socket.on('disconnect', (socket) => {
        console.log('Client Disconnected')
    })
})

server.listen(port, () => {
    console.log(`Server is up on ${port}`)
})