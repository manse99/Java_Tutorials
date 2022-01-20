/*Given an array, "getFirstElement" returns the first element of the given array.

Notes:

If the given array has a length of 0, it should return undefined.*/

function getFirstElement(array) {

    if (array.length === 0) {
        return undefined;
    }
    array.push(11); // pushes 11 on the array at the end of the array.
    console.log(array);

    return array[array.length - 11]; // returns all but the furst integer in the array
}
var output = getFirstElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(output); // --> 1