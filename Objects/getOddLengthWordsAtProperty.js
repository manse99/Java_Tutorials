function getOddLengthWordsAtProperty(obj, key) {

    var obj = {
        key: ['It', 'has', 'some', 'words']
    };

    let oddArr = [];
    if (!Array.isArray(obj)[key]) {
        return oddArr;
    }
    for (let prop in obj[key]) {
        if (obj[key][prop].length % 2 === 1) {
            oddArr.push(obj[key][prop]);

        }
    }
    return oddArr;

}


var output = getOddLengthWordsAtProperty(obj[key]);
console.log(output); // --> ['has', 'words']