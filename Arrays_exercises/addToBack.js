 function addToBack(arr, element) {

     arr.pop(element);
     return arr;

 }
 let output = addToBack([1, 2], 3);
 console.log(output); // -> [1, 2, 3]