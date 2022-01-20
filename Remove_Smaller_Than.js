function removeNumbersLessThan(num, obj) {
    for (x in obj) {
        if (typeof(obj[x]) === 'number' && obj[x] < num) {
            delete obj[x]
        }
    }
}
var obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
removeNumbersLessThan(5, obj);
console.log(obj); // --> { a: 8, c: 'montana' }