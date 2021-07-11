import { Server } from 'socket.io'
import { server } from './app'
import { CLIENT_ORIGIN } from './constants'

const io = new Server(server, {
  cors: {
    origin: CLIENT_ORIGIN
  }
})

io.on('connection', socket => {
  console.log('a user connected')

  socket.on('sync', path => {
    console.log('sync', path)
    socket.broadcast.emit('sync', path)
  })
})
