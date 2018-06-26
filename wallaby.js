module.exports = function () {

  return{

    files: ['/Users/joshuamcclung/codefellows/401/data-structures-and-algorithms/*.js'],
    
    tests: ['/__test__/linked_lists_tests/**.test.js'],
    
    env: {
      type: 'node',
    },
    
    testFramework: 'jest',

  };
};