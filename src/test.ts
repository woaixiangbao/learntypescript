import {expect} from 'chai';
import {add} from './math';

describe('测试 math', function() {
  it('add()', function() {
    expect(add(1, 2)).to.equal(3);
  });
});