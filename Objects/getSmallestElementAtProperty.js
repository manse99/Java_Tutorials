/* Given an object and a key, "getSmallestElementAtProperty" returns 
the smallest element in the array located at the given key.

Notes:

If the array is empty, it should return undefined.
If the property at the given key is not an array, it should return undefined.
If there is no property at the key, it should return undefined */

function getSmallestElementAtProperty(obj, key) {
    // set array inside given key to a variable 
    let arrayInsideObject = obj[key];
    // if array is empty, or no property at array, or not an array.
    if (arrayInsideObject === undefined || !(Array.isArray(arrayInsideObject)) || arrayInsideObject.length < 1) {
        return undefined;

    }
    // return the smallest element inside array [key] 
    // Method one: 
    return Math.min.apply(null, arrayInsideObject); // this can return either the MIN or the MAX


}
var obj = {
    key: [2, 1, 5]
};
var output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1