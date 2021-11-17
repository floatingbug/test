const io = require('socket.io')();
const socketapi = {
	io: io
};

io.on('connection', (socket)=>{
	console.log("User connected")
})


module.exports = socketapi;
