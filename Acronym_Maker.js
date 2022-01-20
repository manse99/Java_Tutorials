function acronymMaker(wordBank) {
    //You can assume the first letter of each string 
    //in the array is capitalized
    var acronym = ' '; // initialize an empty string
    for (var i = 0; i < wordBank.length; i++) {
        acronym += wordBank[i][0]; // takes the first letter of each string.
    }
    return acronym;
}
console.log(acronymMaker(["National", "Aeronautics", "Space", "Administration"])); //"NASA"
console.log(acronymMaker(["World", "Health", "Organization"])); //"WHO"