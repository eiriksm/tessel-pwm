var increase = 0;
var decrease = 1;

module.exports = function(obj) {
  if (obj.type == increase) {
    obj.count += .1;
    if (obj.count > .9) {
      obj.type = decrease;
    }
  }
  else {
    obj.count -= .1;
    if (obj.count < .1) {
      obj.type = increase;
      obj.count = 0;
    }
  }
  return obj;
};
