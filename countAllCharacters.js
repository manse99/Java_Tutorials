/* Given a string, "countAllCharacters" returns an object
 where each key is a character in the given string.
  The value of each key should be how many times each character
 appeared in the given string*/

function countAllCharacters(str) {
    if (str.length === 0) {
        return {}; // if str is empty return nothing.
    }
    var count = {}; // initiate a count variable.
    for (var i = 0; i < str.length; i++) { // set a for loop
        if (count[str[i]] === undefined) { // if no charaters in the string it's undefined.
            count[str[i]] = 0; // count the charaters in the string starting at 0.
        }
        count[str[i]]++; // increment the count accourding to the charaters in the string.
    }
    return count;



}


var output = countAllCharacters('Banana');
console.log(output); // --> {b: 1, a: 3, n: 2}*/

/*--------------------------------------------------------------------*/

//----------Counting all characters in a string--------------------////
/*function countCharacter(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++

        }

    }
    return count;
}
var output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
//var output = countCharacter('bananayuiiuuugcgh');*/