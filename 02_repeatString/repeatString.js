const repeatString = function (string, num) {
  finalString = "";
  if (num < 0) {
    return "ERROR";
  } else {
    while (num > 0) {
      finalString += string;
      num--;
    }
    return finalString;
  }
};
repeatString("hey", 3);
repeatString("hey", 10);
repeatString("hey", 1);
repeatString("hey", 0);
repeatString("hey", -1);

// Do not edit below this line
module.exports = repeatString;
