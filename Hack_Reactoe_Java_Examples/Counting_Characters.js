// write a function to count the number of Characters in the string


function countChar(string, ch) {
    let counted = 0; // initiate a counted variable.
    for (let i = 0; i < string.length; i++) {
        if (string[i] === ch) {
            counted += 1;
        }
        console.log(counted);
    }
    return counted;
}

function countBs(string) {
    return countChar(string, "G");
}
console.log(countChar("KKKk"));
// → 4
//console.log(countBs("BBC"));