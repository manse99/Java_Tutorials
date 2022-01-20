// Time Limit 45 minutes 
// Write a function and that takes two boolean inputs and returns a boolean that reflects the results of the logical and
// *Special note* do not use && in your function.
//Hint: take a look at https://en.wikipedia.org/wiki/Truth_table
function and(bool1, bool2) {
    bool1 = [0, 0, 1, 1];
    bool2 = [0, 1, 0, 1];

    return self.indexOf(bool1) === indexOf(bool2);

}
and(true, true) //true
and(true, false) //false
console.log(and);