/* Your goal is to make use of the assertion functions by designing a "test suite". The next lesson is going to provide a precisely formatted and organized section of code; please use
 this to guide your work during the remainder of this module. */

// Use categorical reasoning to consider all the useful cases.

// Debug the code under test, if necessary.

// Starter Code :
// var squaredN = n * n;
function square(n) {
    return n * n;
}

function assertEqual(actual, expected, testName) {
    if (actual === expected) {
        console.log('Test passed [' + testName + ']');
    } else {
        console.log('TEST FAILED [' + testName + '] expected, ' + expected + ' but got ' + actual + '');
    }
}

assertEqual(square(10), 1, 'square a positive number');
assertEqual(square(-5), 25, 'square a negative number');
assertEqual(square(0.25), 0.0625, 'square a fraction');
assertEqual(square(0), 0, 'square zero equals zero');