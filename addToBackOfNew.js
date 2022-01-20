function addToBackOfNew(arr, element) {
    let newarr = []; // create an empty array
    let newarr1 = newarr.concat(arr); // combine existing and empty arrays

    newarr1.push(element) // append both arrays to the array newarr1
    return newarr1;

}
var input = [1, 2, 3, 4, 5];
var output = addToBackOfNew(input, 6);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]