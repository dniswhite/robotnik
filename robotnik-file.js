var five = require("johnny-five"),
	board = new five.Board(),
	button = require('./lib/buttons')

board.on("ready", function() {
var led = new five.Led(13),
	left = new five.Servo({ pin:  7, type: 'continuous' }).stop(),
	right = new five.Servo({ pin: 11, type: 'continuous' }).stop(),
	sensor = new five.Sensor('A0')

button.on('right', function() {
  left.cw(.6);
  right.ccw(.1);

})
button.off('right', function() {
  left.stop();
  right.stop();

})

})