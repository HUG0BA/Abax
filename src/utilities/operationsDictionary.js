const operationsDictionary = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => (b === 0 ? "error" : a / b),
  "%": (a, b) => (b === 0 ? "error" : a % b),
};

export default operationsDictionary;
