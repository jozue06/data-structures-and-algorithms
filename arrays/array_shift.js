'use strict';

module.exports = exports = {};

exports.insertShiftArray = (arr, num) => {

  let shiftedArray = [];
  let midPos = Math.ceil(arr.length/2);

  for(let i = 0; i < arr.length +1; i ++){

    if (i < midPos) {
      shiftedArray[i] = arr[i];
    }

    if(i == midPos){
      shiftedArray[i] = num;
    }

    else if (i > midPos) {
      shiftedArray[i] = arr[i -1];
    }
  }
  return shiftedArray;
};

