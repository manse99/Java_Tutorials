/* Given an array and an index, "getElementsAfter" returns a new array
 with all the elements after (but not including) the given index.

Notes:

In order to do this you should be familiar with the 'SLICE' method.*/

function getElementsAfter(array, n) {
    // your code here
    return array.slice(n + 1);

}
var output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2);
console.log(output); // --> ['d', 'e']