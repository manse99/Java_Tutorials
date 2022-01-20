/* Given an array and an integer, "getNthElement"
 returns the element at the given integer, within the given array.

Notes:

If the array has a length of 0, it should return 'undefined'.*/

function getLastElement(array) {
    if (array.length === 0) {
        return undefined;
    }
    let lastindex = array.length - 1; //this can be used for any length array
    return array[lastindex];

}
var output = getLastElement([1, 2, 3, 4]);
console.log(output); // --> 4