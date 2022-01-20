/* Given an object and a key, "getAllButLastElementOfProperty" returns
 an array containing all but the last element of the array located at the given key.

Notes:

If the array is empty, it should return an empty array.
If the property at the given key is not an array, it return an empty array.
If there is no property at the key, it should return an empty array. */


function getAllButLastElementOfProperty(obj, key) {
    var arrayInsideObject = obj[key];

    //if array is empty, or property at given key not an array, or no property at key
    if (arrayInsideObject === undefined || !(Array.isArray(arrayInsideObject)) || arrayInsideObject.length === -1) {
        return [];
    }
    obj[key].pop(); // deletes last index in an array
    return obj[key];

    obj[key].shift(); // deletes the first index in an array.
    return obj[key];

}
var obj = {
    key: [1, 2, 3]
};
var output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]