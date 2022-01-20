/* Write a function called "getLengthOfShortestElement".
Given an array, "getLengthOfShortestElement"
 returns the length of the shortest string in the given array*/

function getLengthOfShortestElement(arr) {
    if (arr.length === 0) return 0
    var shortest = arr[0].length
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length < shortest) {
            shortest = arr[i].length
        }
    }
    return shortest
}

var output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3