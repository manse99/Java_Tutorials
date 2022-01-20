/*Write a function called "findMaxLengthOfThreeWords".
Given 3 words, "findMaxLengthOfThreeWords" returns the length of the longest word.
var output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 3
*/
function findMaxLengthOfThreeWords(word1, word2, word3) {
    return Math.max(word1.length, word2.length, word3.length)
}
var output = findMaxLengthOfThreeWords('Gabriel Cohen', 'be in the city of New York', 'see it all through his eyes');
console.log(output); // --> 3