var t = require('..');

require('should');
describe('Core functionality', function() {
  it('Should pass all these super advanced calculations', function() {
    t({type: 0, count: .9}).type.should.equal(1);
    t({type: 0, count: .9}).count.should.equal(1);
    t({type: 0, count: .6}).count.should.equal(.7);
    t({type: 1, count: 0}).type.should.equal(0);
    t({type: 1, count: 0.2}).type.should.equal(1);
    t({type: 0, count: 0.3}).count.should.equal(.4);
  });
});
