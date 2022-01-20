//Given an array and an object, "select" returns a new object whose 
//properties are those in the given object
// AND whose keys are present in the given array.

function select(arr, obj) {
    // create a result object 
    var result = {};
    // Iterate over the array
    for (var i = 0; i < arr.length; i++) {
        // if key is present in input object
        if (obj[arr[i]] !== undefined) {
            result[arr[i]] = obj[arr[i]];
        }
    }
    // add property to result object
    // return a result object
    return result;

}

var arr = ['a', 'c', 'e'];
var obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};
var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }