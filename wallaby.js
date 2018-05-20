module.exports = function () {

  return{

    files: ['lab-02-josh/lib/**/*.js'],
    
    tests: ['lab-02-josh/__test__/**/*.test.js'],
    
    env: {
      type: 'node',
    },
    
    testFramework: 'jest',

  };
};