/* Given a word, "getAllLetters" returns an array
 containing every character in the word.

Notes:

If given an empty string, it should return an empty array.
You should be familiar with the 'split' method */

function getAllLetters(str) {

    return str.split('');

    for (i in str) {
        return str.split(''); // this returns the individual letters in the string.

    }

}
var output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']

//var output = getAllLetters('Radagast the Brown');
//console.log(output); // --> ['Radagast', 'the', 'Brown']