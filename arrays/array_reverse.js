'use strict';

function reverseArray (arr){

  let reversedArr = [];
  for(let i = arr.length-1; i>=0; i--){
    reversedArr.push(arr[i]);
  }
  return reversedArr;
}

reverseArray([6,3,7,8]);
