

//Given a list of non-negative integers and a target sum, 
//find a pair of numbers that sums to the target sum.



//Example:

function FindPairForSum(array){

if (array.length === 0) {
    return undefined;
}
return array[0];
}


var pair = findPairForSum([3, 34, 4, 12, 5, 2, 5, 9], 9);
console.log(pair); // --> [4, 5]