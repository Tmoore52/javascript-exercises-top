const add = function (a, b) {
  let total = a + b;
  return total;
};

const subtract = function (a, b) {
  let total = a - b;
  return total;
};

const sum = function (array) {
  let total = 0;
  for (let item of array) {
    total += item;
  }
  return total;
};

const multiply = function (array) {
  let total = 1;
  for (let item of array) {
    total *= item;
  }
  return total;
};

const power = function (number, power) {
  return (total = number ** power);
};

const factorial = function (n) {
  if (n === 0) {
    return n = 1;
  } else {
    for (i = n - 1; i >= 1; i--){
     n *= i;
    }
    return n;
  }
};
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
