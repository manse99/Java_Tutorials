function removeNumberValues(obj) {
    // your code here   
    for (var key in obj) {
        if ((typeof obj[key] === 'number' && key.length < 7))
            delete obj[key]
    }
}


var obj = {
    a: 2,
    b: 'remaining',
    c: 4,
    d: 'this is a test string',
    e: 67.09
};
removeNumberValues(obj); // This is a "call" to the function - OBJ
console.log(obj); // --> { b: 'remaining' }