/* Given an array, "getLargestElement" returns the largest number in the given array.
It should return 0 if the array is empty.*/

function getLargestElement(arr) {
    if (arr.length === 0) {
        return 0;
    }
    /*if (currentLargestNumber > previousLargestNumber == true) {
        return currentLargestNumber;
    } else {
        return previousLargestNumber;
    */
    let i;
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;

}


var output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;