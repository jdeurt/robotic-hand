const config = require("./config");
const five = require("johnny-five");
const board = new five.Board();

board.on("ready", function() {
    //define var led as an LED light connected to port 13
    let led = new five.Led(13);
    //make the led blink every 500ms
    led.blink(500);
});
