'use strict';

class MathOperations {
    sum() {
        let arr = [...arguments];
        return arr.reduce((a,b)=>(a+b), 0);
    }

    multiply() {
        let arr = [...arguments];
        return arr.reduce((a,b)=>(a*b), 1);
    }
}

module.exports = MathOperations;