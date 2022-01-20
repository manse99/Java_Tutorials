function convertDoubleSpaceToSingle(str) {
    // your code here 
    var newArray = str.split(" ");
    var newArray2 = [];
    for (var i = 0; i < newArray.length; i++) {
        if (newArray[i] !== "") {
            newArray2.push(newArray[i]);
        }
    }
    return newArray2.join(" ");
}

var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"








var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"