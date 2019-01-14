'use strict';

class MathOperations {
    sum() {
        let arr = [...arguments];
        return arr.reduce((a,b)=>(a+b));
    }

    multiply() {
        let arr = [...arguments];
        return arr.reduce((a,b)=>(a*b));
    }
}

module.exports = MathOperations;