'use strict';

let search = require('../arrays/array_binary_search.js');

describe('Insert shift', () => {

  it('binarySearch() should return the index of 2', () => {
    expect(search.binarySearch([1, 2, 3, 4], 3)).toBe(2);
  });
  
  it('binarySearch() should return the index of 4', () => {

    expect(search.binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5)).toEqual(4);
  });
  
  it('binarySearch() should return -1, not found', () => {
    expect(search.binarySearch([4, 8, 15, 17, 23, 42], 16)).toEqual(-1);
  });
  
  
});