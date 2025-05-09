const reverseString = function(string) {
  let newString = '';
  let splitString = string.split();
  for (let i = string.length; i >= 0; i--) {
    newString = newString + splitString[i];
  }
  return newString;
};

// Do not edit below this line
module.exports = reverseString;
