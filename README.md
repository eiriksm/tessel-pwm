tessel-pwm
==========
[![Code Climate](https://codeclimate.com/github/eiriksm/tessel-pwm/badges/gpa.svg)](https://codeclimate.com/github/eiriksm/tessel-pwm)
[![devDependency Status](https://david-dm.org/eiriksm/tessel-pwm/dev-status.svg)](https://david-dm.org/eiriksm/tessel-pwm#info=devDependencies)
[![Build Status](https://travis-ci.org/eiriksm/tessel-pwm.svg?branch=master)](https://travis-ci.org/eiriksm/tessel-pwm)
[![Coverage Status](http://img.shields.io/coveralls/eiriksm/tessel-pwm.svg)](https://coveralls.io/r/eiriksm/tessel-pwm?branch=master)

### Installtion

`npm install tessel-pwm`

### Description

This module is only used for doing a demo of pwm on the tessel.

It would be useful if you have a value that you wanted to alter, and then for each step make it one step less on the tessel pwm scale.

For each time you invoke the pwm module function on your count object, the value would be incremented or decremented with .1 within the 0-1 range.

For example, if you wanted to implement a LED that lights up more and more and less and less with the PWM effect, you can use it like so:

```js
var tp = require('tessel-pwm');
var tessel = require('tessel');
var gpio = tessel.port['GPIO'];
var myPin = gpio.pwm[0];

gpio.pwmFrequency(980);

var startLevel = 1;
var obj = {
  count: startLevel
}
setInterval(function() {
  // On the first run of this interval, obj.count right here is 1;
  tp(obj);
  // Now, all of a sudden, obj.count is 0.9. Because of ^^.
  // Next time, obj.count will be 0.8.
  myPin.pwmDutyCycle(obj.count);
}, 100);
```

### Sure, that's a lot of code, but what does this mean?

![pwm blink](https://raw.github.com/eiriksm/tessel-pwm/master/pwm.gif)

The above gif depicts (with a non-perfect loop) what the above code example does. It is in fact the exact same code running.

### What can you use this for?

Not really sure. And to be frank, I don't really remember what I used it for when I made it. If someone finds any use for it, that will make me glad.
