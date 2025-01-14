const sumAll = function (x, y) {
  let finalSum = 0;

  if (x < 0 || y < 0) {
    return "ERROR";
  } else if (typeof x === "string" || typeof y === "string") {
    return "ERROR";
  } else if (typeof x === "object" || typeof y === "object") {
    return "ERROR";
  } else if (x > y) {
    let min = y;
    let max = x;
    for (i = min; i < max + 1; i++) {
      finalSum += i;
    }
    return finalSum;
  } else {
    min = x;
    max = y;
    for (i = min; i < max + 1; i++) {
      finalSum += i;
    }
    return finalSum;
  }
};

// Do not edit below this line
module.exports = sumAll;
