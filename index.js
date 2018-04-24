const config = require("./config");
const flex = require("./lib/flex");
const five = require("johnny-five");
const board = new five.Board();

console.log(`
    JS -> Python.
    Beause I can.
    Robotics 2018 Arduino Arm Project.
    - Juan de Urtubey
`);

board.on("ready", () => {
    const flex: {
        thumb: new five.sensor({
            pin: "A0",
            freq: 250,
            threshold: 10
        }),
        g1: new five.sensor({
            pin: "A1",
            freq: 250,
            threshold: 10
        }),
        g2: new five.sensor({
            pin: "A2",
            freq: 250,
            threshold: 10
        })
    };
    flex.thumb.on("change", p => console.log(flex.precent(p)));
    flex.g1.on("change", p => console.log(flex.precent(p)));
    flex.g2.on("change", p => console.log(flex.precent(p)));
});
