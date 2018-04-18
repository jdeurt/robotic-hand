const config = require("./config");
const five = require("johnny-five");
const board = new five.Board();

board.on("ready", function() {
    let led = {
        success: new five.Led(config.ports.SUCCESS_LED),
        warn: new five.Led(config.ports.WARN_LED),
        error: new five.Led(config.ports.ERROR_LED)
    };
    let arm = {
        shoulder: new five.Servo(config.ports.SHOULDER_SERVO),
        elbow: new five.Servo(config.ports.ELBOW_SERVO),
        wrist: new five.Servo(config.ports.WRIST_SERVO),
        fingers: {
            thumb: new five.Servo(config.ports.THUMB_MOTOR),
            index: new five.Servo(config.ports.INDEX_FINGER_MOTOR),
            middle: new five.Servo(config.ports.MIDDLE_FINGER_MOTOR),
            ring: new five.Servo(config.ports.RING_FINGER_MOTOR),
            pinky: new five.Servo(config.ports.PINKY_FINGER_MOTOR),
        }
    };
    for(let prop in arm.fingers) {
        arm.fingers[prop].to(0);
    }
    arm.fingers.middle.to(180);
});


