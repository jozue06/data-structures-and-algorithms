'use strict';

module.exports = exports = {};

exports.binarySearch = (arr, searchKey) => {

  let start = 0;
  let stop = arr.length - 1;
  let midPos = Math.floor((start + stop) / 2);
  
  while (arr[midPos] !== searchKey && start < stop) {
    if (searchKey < arr[midPos]) {
      stop = midPos - 1;
    } else {
      start = midPos + 1;
    }
    midPos = Math.floor((start + stop) / 2);
  }
  return (arr[midPos] !== searchKey) ? -1 : midPos;
};
  

