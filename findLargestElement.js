function getLargestElement(arr) {
    // your code here
    if (arr.length === 0) {
        return 0;
    }
    //return Math.max(...arr); // => 80
    return Math.min(...arr); // => .0021
    //return Math.trunc(29.00007625); // => 29



}
var output = getLargestElement([5, 2, 8, 3, 80, 55, .0021]);
console.log(output); // --> 8;