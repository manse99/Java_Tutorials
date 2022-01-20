/* Given an array of numbers, "filterOddElements" returns an array containing
 only the odd numbers of the given array*/

function filterOddElements(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1) {
            result.push(arr[i])
        }
    }
    return result;
}
var output = filterOddElements([1, 2, 3, 4, 5, 6, 7,
    8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
]);
console.log(output); // --> [1, 3, 5]