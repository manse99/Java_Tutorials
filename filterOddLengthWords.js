/* Write a function called "filterOddLengthWords".
Given an array of strings, "filterOddLengthWords"
 returns an array containing only the elements of
  the given array whose lengths are odd numbers*/

function filterOddLengthWords(words) {
    // create a RESULT array.

    var OddLengthWords = [];
    // iterate over the words. if word is odd add to result array.
    for (var i = 0; i < words.length; i++) {
        if (words[i].length % 2 === 1) {
            OddLengthWords.push(words[i]);
        }
    }
    // return result array
    return OddLengthWords;;
}
const output = filterOddLengthWords(['there', 'it', 'is', 'now', 'gabriel', 'house', 'jacoby']);
console.log(output); // --> ['there', "now']
