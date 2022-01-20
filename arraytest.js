/*var x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sumofsquares = [];

//for (i = 0; i < x.length; i++) {

// if (x.lastIndexOf = i) {}
x.forEach(function(a) {
            sumofsquares += a * a;
        }

 console.log(sumofsquares);*/

// create a mutidimentional array
/*let table = new Array(10);
for (let i = 0; i < table.length; i++) {
    table[i] = new Array(10);
}
// Initialize the array row and column
for (let row = 0; row < table.length; row++) {
    for (col = 0; col < table[row].length; col++) {
        table[row][col] = row * col;
    }
}
let gabe = table.splice(7, 3);
console.log(table[3][7]);
console.log(gabe);*/

// for each method
var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
//let sum = 0;
//data.forEach(function(v, i, a) { a[i] = v * 2 }); // times 2 to each value
//console.log(data);

// the map method
/* The map() method passes each element of the array on 
which it is invoked to the function
you specify*/
b = data.map(function(x) { return x * x; });

console.log(b);
// the filter method
let OddVals = data.filter(function(x, i) { return i % 2 === 0 });

console.log(OddVals);
// the every method 
let evenVals = data.every(function(x) { return x % 2 === 0; })
console.log(evenVals);

// the some method
let someVals = data.some(function(x) { return x % 2 === 0; });
console.log(someVals);