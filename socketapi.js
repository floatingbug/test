const io = require('socket.io')();
const socketapi = {
	io: io
};

io.on('connection', (socket)=>{
	console.log("User connected")
	socket.on('cli_msg', (msg)=>{
		io.emit('srv_msg', msg)
	})
})


module.exports = socketapi;
