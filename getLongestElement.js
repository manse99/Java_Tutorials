/* Write a function called "getLongestElement".
Given an array, "getLongestElement" returns the longest string
in the given array.
Notes:
If there are ties, it returns the first element to appear.
If the array is empty, it should return an empty string */

function getLongestElement(arr) {
    if (arr.length === 0) {
        return '';
    }
    var longest = arr[0]; // longest equal to the first element
    for (var i = 1; i < arr.length; i++) {
        if (arr[i].length > longest.length) { // if the length of the current index is greater than the longest length
            longest = arr[i]; // reassign from current index arr to longest
        }

    }
    return longest;
}

var output = getLongestElement(['one', 'two', 'three', 'gyaiugyiugaui']);
console.log(output); // --> 'three'