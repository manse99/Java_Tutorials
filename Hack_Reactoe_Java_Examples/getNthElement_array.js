/* Given an array and an integer, "getNthElement"
 returns the element at the given integer, within the given array.

Notes:

If the array has a length of 0, it should return 'undefined'.*/

function getNthElement(array, n) {
    if (array.length === 0) {
        return undefined;
    }
    return array[0];

}
var output = getNthElement([1, 3, 5], 1);
console.log(output); // --> 3