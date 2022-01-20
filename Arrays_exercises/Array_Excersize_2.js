// generate an array of string lengths from an array of strings:
var y = ['one', 'two', 'three', 'four'].map(function(value) {
    return value.length;
});
console.log(y);
// → [3, 3, 5, 4]*/
/*----------------------------------------------------------------------------*/
var g = ['one', 'two', 'three', 'four'].reverse(index => index.length);

console.log(g)
    // → [3, 3, 5, 4]
    /*-----------------------------------------------------------------------------------*/
    // squaring of an array of integers.
var temp = [];
var anythingYouWant = [5.8, 0.944];
for (var i = 0; i < anythingYouWant.length; i++) {
    if (anythingYouWant.lastIndexOf = i) {
        anythingYouWant.forEach(function(x) {
            temp += x * x;
        })
    }
}
console.log(temp);


//
//---------------------------------------------------------------------------*/
// Alphabetical sorting using sort(a, b) =>{}
var x = ['gabe', 'xavier', 'joan', 'bart', 'mary', 'fred'].sort((a, b) => {
    return a.localeCompare(b);
});
console.log(x);