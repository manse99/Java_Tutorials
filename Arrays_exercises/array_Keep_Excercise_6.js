/* Given an array and a keeper element, "keep"
 returns an array containing the items that match the given keeper element.

Notes:

If no elements match, "keep" should return an empty array.*/

function keep(array, keeper) {
    if (typeof array === "undefined" && array === null) { // if elements do not match
        return array;
    }
    return array.filter(function(value) {
        return value === keeper;

    });
}



var output = keep([1, 2, 3, 2, 1], 2)
console.log(output) // => [2, 2]