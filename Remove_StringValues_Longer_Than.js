function removeStringValuesLongerThan(obj) {
    for (x in obj) {
        if ((typeof obj[x] === "string") && obj[x].length > num) {
            delete obj[x]
        }
    }
}


var obj = {
    name: 'Montana',
    age: 20,
    location: 'Texas'
};
removeStringValuesLongerThan(3, obj);
console.log(obj);