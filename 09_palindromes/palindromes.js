const palindromes = function (string) {
  let cleanString = string.toLowerCase().replace(/[^a-z]+/gi, "");
  if (cleanString.split("").reverse().join("") === cleanString) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
