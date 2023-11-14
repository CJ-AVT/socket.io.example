import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, { cors:{
    origin: process.env.ORIGIN || '*',
    credentials: process.env.CREDENTIALS || false
} });

io.on("connection", (socket) => {

    console.log(socket.id, 'connected')
    
    const interval = setInterval(()=>{
        socket.emit('switchSlide', {number:Math.floor(Math.random()*3)})
    },1500)

    socket.on('disconnect', (reason) => {
        clearInterval(interval)
        console.log(socket.id, 'disconnected')
    })
});

httpServer.listen(process.env.PORT || 3000);