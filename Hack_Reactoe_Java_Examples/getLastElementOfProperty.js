/* Given an object and a key, "getLastElementOfProperty" returns the last element
 of an array located at the given key.

Notes:

If the array is empty, it should return undefined.
if the property at the given key is not an array, it should return undefined.
If there is no property at the key, it should return undefined. */
//----------------------- same code as get Nth & get first element ------*/
function getLastElementOfProperty(bob, alice) {
    if (Array.isArray(bob[alice]) === false) {
        return undefined;
    } else if (bob[alice][0] === undefined) {
        return undefined;
    } else {
        return bob[alice][2];
    }

}

var bob = {
    alice: [1, 2, 5]
};
var output = getLastElementOfProperty(bob, 'alice');
console.log(output); // --> 5