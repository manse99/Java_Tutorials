/*Given an object and a key, "getFirstElementOfProperty" returns the first element
 of the array located at the given key.

Notes:

If the array is empty, it should return undefined.
If the property at the given key is not an array, it should return undefined.
If there is no property at the key, it should return undefined. */

function getFirstElementOfProperty(obj, key) {
    if (Array.isArray(obj[key]) === false) {
        return undefined;
    } else if (obj[key][0] === undefined) {
        return undefined;
    } else {
        return obj[key][0]; // remember array's are indexed...0.1.2.3....etc
    }


}
var obj = {
    key: [1, 2, 4]
};
var output = getFirstElementOfProperty(obj, 'key');
console.log(output); // --> 1