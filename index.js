class MathOperations {
  static sum(...args) {
    return args.reduce((a, b) => (a + b), 0);
  }

  static multiply(...args) {
    return args.reduce((a, b) => (a * b), 1);
  }
}

module.exports = MathOperations;
