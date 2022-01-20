/* Write a function called "computeProductOfAllElements".
Given an array of numbers, "computeProductOfAllElements"
returns the products of all the elements in the given array*/

function computeProductOfAllElements(arr) {
    if (arr.length === 0) {
        return 0;
    }

    var product = arr[0];
    for (var i = 1; i < arr.length; i++) {
        product *= arr[i];

    }
    return product;
}

var output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60