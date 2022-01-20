// given an array of words filter out the longest word given.
// Given an array, "getLengthOfLongestElement" 
// returns the length of the longest string in the given array.



function getLengthOfLongestElement(arr) {
    if (arr.length === 0) {
        return ''; // if the array is empty, return empty string.
    }
    var arrsplit = arr.split(' ');
    var longestword = 0;
    console.log(arrsplit);

    for (var i = 0; i < arrsplit.length; i++) {
        if (arr.split[i].length > longestword) {
            longestword = arrsplit[i].length;
        }
    }
    return longestword;
}

var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // -- output should be 5