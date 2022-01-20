// Pallindrome cases
// given a string return true if it's a pallindrome false if it's not.

var pallindrome = str => {
        str = str.toLowerCase();
        // reverse the string and return result
        return str === str.split('').reverse().join('');
    }
    // start by turning string into lowercase letters
    // reverse the input string by turning it into an array using split()
    //the apply the reverse() method.
    // turn array back into string with join() method
var str = 'happyhounddogday';
console.log();