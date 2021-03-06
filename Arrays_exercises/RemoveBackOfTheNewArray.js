/* Write a function called "removeFromBackOfNew".

Given an array, "removeFromBackOfNew" returns a new array
containing all but the last element of the given array.

Notes:

You should be familiar with the 'slice' method.*/

function removeFromBackOfNew(arr) {

    return arr.slice(1, arr.length);
}
var arr = [1, 2, 3];
var output = removeFromBackOfNew(arr);
console.log(output); // --> [1, 2]
console.log(arr); // --> [1, 2, 3]