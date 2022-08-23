const removeFromArray = function (arr, splice) {
    console.log(arr);
    let removed = arr.splice(splice-1, 1);
    console.log(arr);
    return arr;
  };
  
// Do not edit below this line
module.exports = removeFromArray;
