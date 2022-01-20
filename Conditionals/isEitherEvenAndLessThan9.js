/* Write a function called "isEitherEvenAndLessThan9".

Given two numbers, 'isEitherEvenAndLessThan9'
 returns whether at least one of them is even, and, both of them are less than 9.*/

function isEitherEvenAndLessThan9(num1, num2) {

    if ((num1 < 9 && num2 < 9) && (num1 % 2 == 0 || num2 % 2 == 0)) {
        return true
    } else {
        return false
    }
}
var output = isEitherEvenAndLessThan9(292, 400);
console.log(output); // --> true

var output = isEitherEvenAndLessThan9(72212, 7552);
console.log(output); // --> false