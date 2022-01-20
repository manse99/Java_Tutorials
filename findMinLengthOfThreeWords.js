/*Write a function called "findMinLengthOfThreeWords".
Given 3 words, "findMinLengthOfThreeWords" returns the length
of the shortest word.*/

function findMinLengthOfThreeWords(word1, word2, word3) {
    var result = 100; // this is an arbitrary number for REFERENCE!!!
    var newArray = [word1, word2, word3]; // Putting ALL the words in ONE(1) Arrary
    for (var i = 0; i < newArray.length; i++) { // Looping thru array length => is 1
        if (newArray[i].length < result) { // is 1 less than 100 YES!!     
            result = newArray[i].length
        }
    }
    return result;
}
var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1