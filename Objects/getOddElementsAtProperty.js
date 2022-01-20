function getOddElementsAtProperty(obj, key) {

    var newArr = [];
    //set array inside given key to a variable
    var arrayInsideObject = obj[key];
    //if array is empty, or property at given key not an array, or no property at key
    if (arrayInsideObject === undefined || !(Array.isArray(arrayInsideObject)) || arrayInsideObject.length < 1) {
        return newArr;
    }
    //iterate through array
    arrayInsideObject.forEach(function(value, index) {
        //if element at index is odd
        if (value % 2 !== 0) {
            //add to new array
            newArr.push(value);
        } else {
            //do nothing
        }
    });
    return newArr;
}


var obj = {
    key: [1, 2, 3, 4, 5]
};
var output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]