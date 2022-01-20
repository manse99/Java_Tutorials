function computeSumOfAllElements(arr) {
    let sum = 0; // initialize sum of all elements
    // itierate thru the elements
    // add them to "sum"
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
//---------------------------------------------------------------//
//----------other variations of a FOR LOOP ----------------------//
/*function myObj(obj, key) {
    var person = {
        firstname: 'Gabriel',
        lastname: 'Cohen',
        age: 51,
        location: 'NYC',
        religion: 'Buddhist'
    }
}
for (var key = 0, value = myArray[key], length = myArray.length; key < length; value =
    myArray[++key]) {

}
console.log(key[2]);

*/

var maxval = Math.max(sum);
var output = computeSumOfAllElements([1, 2, 3, 9.6, 7.5, 4, 0.777, 3.2, 4]);
console.log(output); // --> 31.07