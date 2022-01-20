/* Write a function called assertWithinRange.
 It will be a function that takes four parameters:
 low a number value, which will be the lower bound on our range;
 high, also a number value, which will be upper bound on our range;
 actual, which will be a number value, and should ideally be the result of calling a function that you are testing.
 (presumably the function being tested should return a number value).
 Finally, testName will be a string,
 and should describe what a call to assertObjectsEqual
 is verifying about the function being tested. */




function assertWithinRange(low, high, actual, testName) {
    // your code here
    var areWithinRange = (actual >= low && actual <= high);
    if (areWithinRange) {
        console.log('passed');
    } else {
        console.log('FAIL [' + testName + '] "' + actual + '" not within range ' + low + ' to ' + high);
    }
}

function assertWithinRange(low, high, actual, testName) {
    if (low <= actual && actual <= high) {
        console.log('passed');
    } else {
        console.log('FAIL [' + testName + '] \"' + actual + '\" not within range ' +
            low + ' to ' + high);
    }
}