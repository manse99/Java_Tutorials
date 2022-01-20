/* Write a function called "extend".

Given two objects, "extend" adds properties from the 2nd object
to the 1st object.

Notes:

Add any keys that are not in the 1st object.
If the 1st object already has a given key, ignore it (do not overwrite the property value).
Do not modify the 2nd object at all. */

function extend(obj1, obj2) {

    for (var key in obj2) { // we are adding to obj1 so we loop through obj2
        if (obj1[key]) { // check to see if obj1 and obj2 keys are the same
            obj1[key] // if we match nothing
        } else {
            obj1[key] = obj2[key] // if no match we add obj2 key to obj1 key
        }
    }
    return obj1;
}
var obj1 = {
    a: 1,
    b: 2
};
var obj2 = {
    b: 4,
    c: 3
};

extend(obj1, obj2);

console.log(obj1); // --> {a: 1, b: 2, c: 3}
console.log(obj2); // --> {b: 4, c: 3}