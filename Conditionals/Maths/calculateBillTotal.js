/* Write a function called "calculateBillTotal".

Given the pre tax and pre tip amount of a meal,
 "calculateBillTotal" returns the total amount due after tax and tip.

Notes:

Assume that sales tax is 9.5% and tip is 15%.
Do NOT tip on the sales tax, only on the pre tip amount */

function calculateBillTotal(preTaxAndTipAmount) {
    var tax = preTaxAndTipAmount * 0.095;
    var tip = preTaxAndTipAmount * 0.150;

    return preTaxAndTipAmount + tax + tip;
}



var output = calculateBillTotal(280.77);
console.log(output); // --> 349.55865