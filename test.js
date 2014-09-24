var tessel = require('tessel');
var gpio = tessel.port['GPIO'];
var myPin = gpio.pin.G4;
gpio.pwmFrequency(980);
var t = require('.');
var obj = {
  type: 0,
  count: 0
};

setInterval(function() {
  t(obj);
  myPin.pwmDutyCycle(obj.count);
  console.log(obj.count);
}, 100);
