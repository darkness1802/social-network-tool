import { Server } from "socket.io"
import http from "http"

const server = http.createServer()
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ['GET', 'POST']
    }
})

io.on("connection", (socket) => {
    console.log(socket.id)

    socket.on("like", ({ to }) => {
        io.emit("like", { to })
    })
})

server.listen(7777, () => {
    console.log(`7777`)
})