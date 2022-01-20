function filterEvenLengthWords(words) {
    let EvenLengthWords = [];

    for (let i = 0; i < words.length; i++) {
        if (words[i] % 2 === 0) {
            EvenLengthWords.push(words[i]);
        }
    }
    return EvenLengthWords;
}

var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']