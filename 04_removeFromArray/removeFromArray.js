const removeFromArray = function(array, ...remove) {
  for (let j = 0; j < remove.length; j++) {  // loops items in ...remove array
    let i = 0;
    while (i < array.length) {
      if (array[i] === remove[j]) {
        array.splice(i, 1);
      } else {
        i++;
      }
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
