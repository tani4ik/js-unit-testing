'use strict';

let MathOperations = require('../index');
let expect = require('expect.js');

describe('MathOperations', () => {
    let instance;

    beforeEach(() => {
        instance = new MathOperations();
    });

    //tests for sum()
    it('should expose a function', () => {
        expect(instance.sum).to.be.a('function');
    });
    it('should sum positive values', () => {
        expect(instance.sum(3, 5, 2, 6)).to.equal(16);
    });
    it('should sum float numbers', () => {
        expect(instance.sum(3.2, 5.1, 2.0, 6.265)).to.equal(16.565);
    });
    it('should sum zero values', () => {
        expect(instance.sum(0, 0, 0, 0, 0, 0, 0, 0)).to.equal(0);
    });
    it('should sum positive and negative values', () => {
        expect(instance.sum(-6, 4, 0, 1000)).to.equal(998);
    });
    it('should sum single value', () => {
        expect(instance.sum(7)).to.equal(7);
    });
    it('should sum single negative value', () => {
        expect(instance.sum(-382)).to.equal(-382);
    });
    it('should work when no values provided', () => { 
        expect(instance.sum()).to.equal(0);
    });
    
    //tests for multiply()
    it('should expose a function', () => {
        expect(instance.multiply).to.be.a('function');
    });
    it('should multiply positive values', () => {
        expect(instance.multiply(3,5,2,6)).to.equal(180);
    });
    it('should multiply float numbers', () => {
        expect(instance.multiply(3.2, 5.1, 2.0, 6.265)).to.equal(204.4896);
    });
    it('should multiply zero values', () => {
        expect(instance.multiply(0,0,0,0,0,0,0,0,)).to.equal(0);
    });
    it('should multiply positive and negative values', () => {
        expect(instance.multiply(-6,4,0,1000)).to.equal(0);
        expect(instance.multiply(-3,5,1,-7,-2)).to.equal(-210);
    });
    it('should multiply single value', () => {
        expect(instance.multiply(7)).to.equal(7);
    });
    it('should multiply single negative value', () => {
        expect(instance.multiply(-382)).to.equal(-382);
    });
    it('should work when no values provided', () => { 
        expect(instance.multiply()).to.equal(1);
    });
});