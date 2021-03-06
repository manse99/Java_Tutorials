/*Write a function called "removeArrayValues".

Given an object, "removeArrayValues" removes any
 properties whose values are arrays.*/

function removeArrayValues(obj) {
    for (var key in obj) {
        //console.log(Array.isArray(obj[key]))
        if (Array.isArray(obj[key]))
            delete obj[key]

    }
    return obj;

}
var obj = {
    a: [1, 3, 4],
    b: 2,
    c: ['hi', 'there']
}
removeArrayValues(obj);
console.log(obj); // --> { b: 2 }