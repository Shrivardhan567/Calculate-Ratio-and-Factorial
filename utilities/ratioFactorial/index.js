let factorialOfANumber = require("../factorial/index.js");
let ratioOfTwoNumbers = require("../ratio/index.js");
let ratioAndFactorial = (num1, num2, num3) => {
  let factorial = factorialOfANumber(num3);
  let ratio = ratioOfTwoNumbers(num1, num2);
  return { ratio, factorial };
};
module.exports = ratioAndFactorial;
