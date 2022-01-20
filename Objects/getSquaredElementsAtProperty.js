/* Given an object and a key, "getSquaredElementsAtProperty" returns an array containing all the squared elements of the array located at the given key.

Notes:

If the array is empty, it should return an empty array.
If the property at the given key is not an array, it should return an empty array.
If there is no property at the key, it should return an empty array. */

function getSquaredElementsAtProperty(obj, key) {
    var newArr = [];
    //set array inside given key to a variable
    var arrayInsideObject = obj[key];
    //if array is empty, or property at given key not an array, or no property at key
    if (arrayInsideObject === undefined || !(Array.isArray(arrayInsideObject)) || arrayInsideObject.length < 1) {
        return newArr;
    }

    //iterate through array inside object at given key
    arrayInsideObject.forEach(function(value, index) {
        newArr.push(value * value);
    })
    return newArr;
}
var obj = {
    key: [2, 1, 5]
};
var output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]