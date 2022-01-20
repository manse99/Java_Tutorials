function countNumberOfKeys(obj) {
    let count = 0;
    for (let key in obj) {
        key = count++
    }
    return count;
}
var obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5
};
var output = countNumberOfKeys(obj);
console.log(output); // --> 5