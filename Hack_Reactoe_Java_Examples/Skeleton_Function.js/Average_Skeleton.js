// Skeleton

// FUNCTION DEFINITION(S)
function average(numbers) {
    // uses sum function
    return
    // returns the average of an array of numbers
}


function sum(numbers) {
    // returns the sum of an array of numbers
    a = [1, 2];
    b = [3, 4];

}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, testName) {
    if (actual === expected) {
        console.log('Test passed [' + testName + ']');
    } else {
        console.log('TEST FAILED [' + testName + '] expected, ' + expected + ' but got ' + actual + '');
    }
}



// TESTS CASES
assertEqual(average(a), b, 'The average of two arrays');
assertEqual(average(-a), b, 'The average of one negative array and a positive arrays');