let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let arr = ["hello", "there", "Gabriel", "cohen", "Alice", "in", "Chains"];
// finding an element in an array
let numElem = arr.slice(0, 1);
console.log(numElem);


// for in loop
for (let i in arr) {
    console.log(arr[i]); // need the array name and index
}
// for OF loop
for (let i of arr) {
    console.log(i); // still need the index
}
// ForEach array method.
arr.forEach((val) => (console.log(val))); // the arrow function method

// The ITERATOR method of accessing arrays.
let it = arr[Symbol.iterator]();;

console.log(it.next()); // one at a time iteration

console.log(it.next()); // one at a time iteration

console.log(it.next()); // one at a time iteration

console.log(it.next()); // one at a time iteration