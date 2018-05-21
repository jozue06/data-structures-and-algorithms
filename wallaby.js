module.exports = function () {

  return{

    files: ['/arrays/**/*.js'],
    
    tests: ['/arrays_tests/**/*.test.js'],
    
    env: {
      type: 'node',
    },
    
    testFramework: 'jest',

  };
};