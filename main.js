$(document).ready(function() {

	// you can change "address" to a specific url or ip address if needed
	var address = 'http://localhost:8080';
	var socket = io.connect(address);

	$("#pwm-slider").slider({
		orientation: "vertical",
		range: "max",
		min: 0,
		max: 179,
		value: 90,
		slide: function(event, ui) {
			$("#pwm-value").val(ui.value);
			socket.emit('move', $("#pwm-value").val());
		}
	});

	$("#pwm-value").val( $("#pwm-slider").slider("value"));

	$("#motor1A").click(function() {
		$("#motor1A-high").toggleClass('active');
		$("#motor1A-low").toggleClass('active');
		// then send action to socket server
		socket.emit('motor1a');
		console.log("emitted 'motor1a'");
	});

	$("#motor1B").click(function() {
		$("#motor1B-high").toggleClass('active');
		$("#motor1B-low").toggleClass('active');
		// then send action to socket server
		socket.emit('motor1b');
		console.log("emitted 'motor1b'");
	});

});