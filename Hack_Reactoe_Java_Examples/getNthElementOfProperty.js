/* Given an object and a key, "getNthElementOfProperty" returns the nth element of an array located at the given key.

Notes:

If the array is empty, it should return undefined.
If n is out of range, it should return undefined.
If the property at the given key is not an array, it should return undefined.
If there is no property at the key, it should return undefined. */

function getNthElementOfProperty(obj, key, n) {
    if (Array.isArray(obj[key]) === false) { // check if its an array
        return undefined;
    } else if (obj[key][0] === undefined) { // if there are no keys
        return undefined;
    } else {
        return obj[key][n]; // same as getting first element in the property
    }

}

var obj = {
    key: [1, 2, 6]
};
var output = getNthElementOfProperty(obj, 'key', 1);
console.log(output); // --> 2