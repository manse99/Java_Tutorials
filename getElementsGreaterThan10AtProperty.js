/* Given an object and a key, "getElementsGreaterThan10AtProperty" returns an array 
containing the elements within the array,
 located at the given key, that are greater than 10.*/

/*f the array is empty, it should return an empty array.
If the array contains no elements greater than 10, it should return an empty array.
If the property at the given key is not an array, it should return an empty array.
If there is no property at the key, it should return an empty array.*/

function getElementsGreaterThan10AtProperty(obj, key) {
    var arr = []; // create an empty array
    if (!propertyExists(obj[key])) { return arr; } // edge case property exists?
    if (!isArray(obj[key])) { return arr; } // edge case is it an array?
    if (isArrayEmpty(obj[key])) { return arr; } // edge case is the array empty?

    for (var i = 0; i < obj[key].length; i++) { // loop over all the key value pairs over 10
        console.log(obj[key][i])
        if (obj[key][i] > 10) {
            arr.push(obj[key][i]); // anything over 10 we push it on to arr
        }
    }


    return arr;
}

function isArray(val) {
    return val.constructor === Array;
}


function propertyExists(val) {
    return val;
}

function isArrayEmpty(val) {
    return val.length < 1;
}



var obj = {
    key: [1, 2, 3, 90, 88.29]
};
var output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output); // --> [20, 30]