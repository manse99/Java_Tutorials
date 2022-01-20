/*Write a function called "countWords".

Given a string, "countWords" returns an object where each key
is a word in the given string, with its value being how many
times that word appeared in the given string.

Notes:

If given an empty string, it should return an empty object.*/

function countWords(str) {

    let myObj = {};
    str.split(" ");

    let x = str.split(" ");
    //console.log(x);
    let result = 0;

    for (let i = 0; i < x.length - 1; i++) {
        let value = x.filter(function(value) {
            return value == x[i]
        }).length
        let key = x[i];


        myObj[key] = value;
    }

    return myObj;
}
var output = countWords('ask a bunch get a bunch');
console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}