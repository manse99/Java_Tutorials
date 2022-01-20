/* Given an object, a key, and a numerical index,

"getElementOfArrayProperty" returns the value
  of the element at the given index of the array
   located within the given object at the given key.

Notes:

If the array is empty, it should return undefined.

If the given index is out of range of the array located at the given key, it should return undefined.

If the property at the given key is not an array, it should return undefined.

If there is no property at the key, it should return undefined. */

function getElementOfArrayProperty(obj, key, index) {
    if (obj[key] === undefined) {
        return undefined;
    }
    if (obj[key].length === 0) {
        return undefined;
    }
    if (Array.isArray(obj[key]) === false) {
        return undefined;
    }


    return obj[key][index]; // returning anything but 0 or 1 will be undefined due to our "edge cases".

}

//obj[key].unshift("Gabe", ['ok', 'hello']); // these varible go to the front.
//obj[key].shift("Gabe", ['ok', 'hello']); // these varibles get shifted out of the array
//obj[key].pop("Gabe", ['ok', 'hello']) // everything gets "POPPED OUT" of the array except "Jamil"
//return obj[key];
var obj = {
    key: ['Jamil', 'Albrey']
};
var output = getElementOfArrayProperty(obj, 'key', 0);
console.log(output); // --> 'Jamil'