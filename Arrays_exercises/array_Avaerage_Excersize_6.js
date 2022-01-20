/*Write a function called "computeAverageOfNumbers".

Given an array of numbers, "computeAverageOfNumbers" returns their average.

Notes:

If given an empty array, it should return 0.*/

function computeAverageOfNumbers(nums) {
    if (nums.length === 0) {
        return 0;
    }
    var sum = 0;
    for (var i in nums) {
        if (nums.hasOwnProperty(i)) {
            sum += nums[i];
        }
    }
    return sum / nums.length;
}

var input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3