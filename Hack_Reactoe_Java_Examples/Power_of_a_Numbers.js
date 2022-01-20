// wtite a program to express the power of a number//

const gabe = (name) => { // "CLO" snippet
    console.log("hello" + name, "gabriel");
}


/*function*/
power = (base, exponent) => { // the arrow REPLACES the function binding
    result = 1;
    for (var count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;

}
console.log(power(9, 7));