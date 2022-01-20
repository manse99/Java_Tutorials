//sorting by length the longest first
var myarr = ['computers', 'Bigfoot', 'Yowie', 'Trees', 'Rain', 'Water'].sort(function(a, b) {

    return b.length - a.length;
});
var newarr = myarr.filter(word => word.length > 3);
var newarr1 = myarr.concat([1, 2, 3, 4, 5, 6]);


console.log(newarr1); // display the named variable
console.log(newarr); // display the named variable