function findSmallestElement(arr) {
    if (arr.length === 0) {
        return 0;
    }
    var smallest = arr[0]
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest
}
var output = findSmallestElement([122, 23, 9]);
console.log(output); // --> 1