/* if w1 id shorter or equal to w2
return shorter word
/* if w2 is shorter or equal to word3
return shorter word
/* if words are eqivical length
return first word on list.*/

function findShortestOfThreeWords(word1, word2, word3) {
    if (word1.length < word2.length) {
        return word1
    } else if (word2.length < word1.length) {
        return word2;
    } else if (word3.length < word2.length) {
        return word3;
    } else if (word3.length < word1.length) {
        return word3;
    }

}

var output = findShortestOfThreeWords('ahhiahio', 'two', 'three');
console.log(output); // --> 'a'