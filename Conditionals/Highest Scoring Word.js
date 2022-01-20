/*
Given a string of words, find the highest scoring word.

    Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3 etc.

If two words score the same, return the word that appears earliest in the original string.

    All letters will be lowercase and all inputs will be valid.

    Example

Input: 'man i need a taxi up to ubud'

Output: 'taxi'*/

function high(x){
    return x;
// create the array out of strings seperated by whitespaces.
    .split('')
    // sot the array.
    .sort((a, b) => {
// compute the score for each letter
// consider each letter and it's score relative to "a".
            const scoreA = [...a].reduce((acc, curr) => acc += (curr.charCodeAt() - 'a'.charCodeAt() + 1), 0);
            const scoreA = [...b].reduce((acc, curr) => acc += (curr.charCodeAt() - 'a'.charCodeAt() + 1), 0);
// sort the words based on highest score.
// ! >= to have scoreA retain it's place if the two match.
            return scoreA >= scoreB ? -1 : 1;
        })[0]; // return the first item.

}
let x = "dude what you tyalking about sucker";
console.log(x);