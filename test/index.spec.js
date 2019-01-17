const expect = require('expect.js');
const MathOperations = require('../index');

describe('MathOperations', () => {
  // tests for sum()
  it('should expose a function', () => {
    expect(MathOperations.sum).to.be.a('function');
  });
  it('should sum positive values', () => {
    expect(MathOperations.sum(3, 5, 2, 6)).to.equal(16);
  });
  it('should sum float numbers', () => {
    expect(MathOperations.sum(3.2, 5.1, 2.0, 6.265)).to.equal(16.565);
  });
  it('should sum zero values', () => {
    expect(MathOperations.sum(0, 0, 0, 0, 0, 0, 0, 0)).to.equal(0);
  });
  it('should sum positive and negative values', () => {
    expect(MathOperations.sum(-6, 4, 0, 1000)).to.equal(998);
  });
  it('should sum single value', () => {
    expect(MathOperations.sum(7)).to.equal(7);
  });
  it('should sum single negative value', () => {
    expect(MathOperations.sum(-382)).to.equal(-382);
  });
  it('should work when no values provided', () => {
    expect(MathOperations.sum()).to.equal(0);
  });

  // tests for multiply()
  it('should expose a function', () => {
    expect(MathOperations.multiply).to.be.a('function');
  });
  it('should multiply positive values', () => {
    expect(MathOperations.multiply(3, 5, 2, 6)).to.equal(180);
  });
  it('should multiply float numbers', () => {
    expect(MathOperations.multiply(3.2, 5.1, 2.0, 6.265)).to.equal(204.4896);
  });
  it('should multiply zero values', () => {
    expect(MathOperations.multiply(0, 0, 0, 0, 0, 0, 0, 0)).to.equal(0);
  });
  it('should multiply positive and negative values', () => {
    expect(MathOperations.multiply(-6, 4, 0, 1000)).to.equal(0);
    expect(MathOperations.multiply(-3, 5, 1, -7, -2)).to.equal(-210);
  });
  it('should multiply single value', () => {
    expect(MathOperations.multiply(7)).to.equal(7);
  });
  it('should multiply single negative value', () => {
    expect(MathOperations.multiply(-382)).to.equal(-382);
  });
  it('should work when no values provided', () => {
    expect(MathOperations.multiply()).to.equal(1);
  });
});
