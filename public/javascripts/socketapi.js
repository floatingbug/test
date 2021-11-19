var socket = null;


var app = new Vue({
	el: '#app',
	data: {
		messages: [],
		input: ""
	},
	created: function(){
		socket = io()
	},
	mounted: function(){
		socket.on('srv_msg', (msg)=>{
			app.messages.push(msg)
		})
	},
	methods: {
		sendMessage: function(e){
			if(e.keyCode === 13 && this.input !== ""){
				socket.emit('cli_msg', this.input)
				this.input = "";
			}
		}
	}
})
