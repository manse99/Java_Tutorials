// Given 3 words, "getLongestOfThreeWords" returns the longest of three words.
//Notes: If there is a tie, it should return the first word in the tie.

function getLongestOfThreeWords(word1, word2, word3) {
    var words = [word1, word2, word3];
    var longest = words[0];

    for (var i = 1; i < words.length; i++) {
        longest = words[i];

        if (words[i].length > longest.length) {
            longest = words[i].length;
        }
    }

    return words[i];

}

var output = getLongestOfThreeWords('these', 'three', 'words')

console.log(output); // --> 'these'