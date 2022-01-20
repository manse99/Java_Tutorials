/* Write a function called "getStringLength".

Given a string, "getStringLength" returns the length of the given string.

Notes:

Do NOT use any native 'length' methods.
You might consider using 'substring' or 'slice' as alternatives. */

function getStringLength(string) {
    // your code here
    var i = 0;
    while (string[i] !== undefined) {
        i++;
    }
    return i;
}


var output = getStringLength('hello');
console.log(output); // --> 5