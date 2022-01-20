/* consider the task of calling a function
on an array of items, returning the results
in a new array. Since arrays are ordinary
values and list concatenation is an ordinary
function, we can use reduce to accumulate a list,
as the following example demonstrates:*/


function map(list, fn) {
  return list.reduce(function(newlist.item){
    return newList.concat(fn(item));
  }, []);

}

//usage

map([1, 2, 3], function(n) { return n * n; });
// => [1, 4, 9]


var arr = [1, 8, 37, 22, 36, 2, 553];

arr.reduce((prev, number) => {
  if(prev.indexOf(number) === -1){
  prev.push(number);
  }
  return prev;
}, []);



// It is often necessary to generate a new array based on the values of an existing array.
// It is often necessary to generate a new array based on the values of an existing array.
//ES6
['gabriel', 'cohen', 'jack', 'angel', 'kelly', 'pendergrass'].map(function(value, index, arr){
return value.length
})
