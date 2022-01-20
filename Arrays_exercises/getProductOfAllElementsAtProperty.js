/* Write a function called "getProductOfAllElementsAtProperty".

Given an object and a key, "getProductOfAllElementsAtProperty" returns the product of all the elements in the array located at the given key.

Notes:

If the array is empty, it should return 0.
If the property at the given key is not an array, it should return 0.
If there is no property at the given key, it should return 0.                   */







function getProductOfAllElementsAtProperty(obj, key) {
    // your code here
    var elements = obj[key];
    if (!Array.isArray(elements)) { // if the array is empty return a 0.
        return 0;
    }
    if (elements.length === 0) { // if there are no elements return a 0
        return 0;
    }

    var product = 1; // set product equal to one(1)
    for (var i = 0; i < elements.length; i++) { // loop thru the elements using length
        product *= elements[i]; // multiply each element
    }
    return product;
}

var obj = {
    key: [1, 2, 3, 4]
};
var output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24