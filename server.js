
var controller = require('http').createServer(handler);
var io = require('socket.io').listen(controller);
var fs = require('fs');
var five = require('johnny-five');

controller.listen(8080);

function handler (req, res) {
	fs.readFile(__dirname + '/index.html',
		function (err, data) {
			if (err) {
				res.writeHead(500);
				return res.end('Error loading index.html');
			}
			
			res.writeHead(200);
			res.end(data);
		});
}


var board = new five.Board();

board.on("ready", function() {
	// servo
	var servo = new five.Servo({
		pin: 10,
		center: true
	});

	var green = new five.Led(13);
	// green.on();
	var red   = new five.Led(12);
	// red.on();

	io.sockets.on('connection', function(socket){
		socket.on('move', function(pos){
			if (pos < 180) {
				servo.to(pos);
			}
		});

		socket.on('motor1a', function () {
			console.log("Green Toggled");
			green.toggle();
		});
		
		socket.on('motor1b', function () {
			console.log("Red Toggled");
			red.toggle();
		});
	});
});