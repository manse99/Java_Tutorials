/* Given an array, "findShortestElement" returns
// the shortest string within the given array
/* If there are ties, it should return the first element to appear.
If the given array is empty, it should return an empty string */

function findShortestElement(arr) {
    if (arr.length === 0) { // Check if our array is empty
        return '';
    }

    let shortestElement = arr[0]; //  Assign our shortest element is initial value from the array

    for (let i = 1; i < arr.length; i++) { // Initiate our loop at 1
        if (shortestElement.length > arr[i].length) { // Compare the initial length to the current length interation
            shortestElement = arr[i]; // If true, re-assign
        }
    }

    return shortestElement;; // return or variable with new element.
}


var output = findShortestElement(['one', 'a', 'two', 'three']);
console.log(output); // --> 'a'