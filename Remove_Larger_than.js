function RemoveNumbersLargerThan(num, obj) {
    for (x in obj) { // Assigning X in the object property
        if (typeof(obj[x]) === 'number' && obj[x] > num) { // if X is a NUMBER and it's larger than our target number
            delete obj[x]; // Delete the number
        }
    }
}
var obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
RemoveNumbersLargerThan(5, obj);
console.log(obj); // --> { b: 2, c: 'montana' }