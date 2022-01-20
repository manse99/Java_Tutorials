function FizzBuzz(int) {
    // write a program that counts to 100
    // if div by 3 print "FIZZ"
    // if div by 5 print "BUZZ"
    // if div by 3 and 5 print "FIZZBUZZ"

    var count = 0;
    for (int = 1; int < 100; int++) {
        if (int % 3 === 0 && int % 5 === 0) {
            count = count + 1;

        } else if (int % 3 === 0) {

            console.log("FIZZ")
        } else if (int % 5 === 0) {

            console.log("BUZZ")
        } else {
            console.log("No FIZZBuZZ")

        }

        return (int);
    }
}



var output = FizzBuzz(100);
console.log(output);