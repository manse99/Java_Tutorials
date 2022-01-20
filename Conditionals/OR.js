/* Write a function called "or".

Given 2 boolean expressions, "or" returns true or false, corresponding to the '||' operator. Notes:

Do not use the || operator.
Use ! and && operators instead */

function or(expression1, expression2) {

    var expression1 = false;
    var expression2 = false;

    return !(!expression1 && expression2 && !expression1);
}
var output = or(true, false);
console.log(output); // --> true;