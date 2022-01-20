/* The code under test is a function called every.
 every is an example of a "higher order" function, meaning that it takes as a parameter,
 another function (higher order functions can also return functions as values).
 This function takes two parameters; the first will be an array of scalar values,
 and the second parameter will be callbackFunction.
 Thus, when you are creating a test suite to verify that every works,
 you are going to need a function that you will use as an argument when you call every.
 Think about it like this, every is going to iterate over an array of scalar values,
 and apply a function to every value. This function MUST return a boolean value,
 mainly because we want every to tell us whether or not,
 EVERY value in the array returns true when the callbackFunction is called upon it. */





// Note: This is a simple, albeit temporarily incorrect implementation of the standard Array method "every()":
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/every

// FUNCTION DEFINITION(S)
function every(array, callbackFunction) {
    var doesEveryElementMatch = true;

    for (var i = 0; i < array.length; i++) {
        if (doesEveryElementMatch === false) {
            return doesEveryElementMatch;
        }
        doesEveryElementMatch = callbackFunction(array[i]);

    }

    return doesEveryElementMatch;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, testName) {
    if (actual === expected) {
        console.log('Test passed');

    } else {

        console.log('TEST FAILED [' + testName + '] expected, ' + expected + ' but got ' + actual + '');
    }
}

// TESTS CASES

function lessThan10(gabe) {
    return gabe < 10;
}
var arrayTrue = [1, 2, 3, 4, 5, 6, 7, 8];
var actualTrue = every(arrayTrue, lessThan10);
assertEqual(actualTrue, true, "the test has passed our conditions")

var arrayFalse = [10, 91, 12, 13, 14, 15, 16, 17, 18];
var actualFalse = every(arrayFalse, lessThan10);
assertEqual(actualFalse, false, "the test has NOT passed our conditions")