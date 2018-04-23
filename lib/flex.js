/**
* Gets the value from a j5 sensor object and fits it to a scale of 100.
* @param sensor {Object}
* @returns {Number}
*/
const percent = sensor => {
    let raw = sensor.raw;
    return raw/1023*100;
};

module.exports = {
    __proto__: percent; 
};
