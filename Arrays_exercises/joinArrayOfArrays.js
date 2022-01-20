 function joinArrayOfArrays(arr) {
     // your code here
     var newArr = []; // Binding an empty array
     for (var i = 0; i < arr.length; i++) { // A For Loop
         newArr = newArr.concat(arr[i]); // The concat() method is used to merge two or more arrays.
     } //  This method does not change the existing arrays,
     return newArr; //  but instead returns a new array.
 }

 var output = joinArrayOfArrays([
     [1, 4],
     [true, false],
     ['x', 'y'],
     ["Gabriel Cohen", "John W. Brown"],
     [0 != null]
 ]);
 console.log(output); // --> [1, 4, true, false, 'x', 'y', 'Gabriel Cohen', true]