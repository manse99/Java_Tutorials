/*Write a function called "getStringLength".

Given a string, "getStringLength" returns the length of the given string.

Notes:

Do NOT use any native 'length' methods.
You might consider using 'substring' or 'slice' as alternatives.

*/

function getStringLength(string) {
    var count = 0;
    while (string !== '') {
        string = string.slice(1); //doesn't string get set to 4 (ello) here since it slices off the first letter? So confused how it still returns 5
        count++;
    }
    return count;

}

var output = getStringLength('hello');
console.log(output); // --> 5