// Time limit 45 minutes  THIS IS FOR MY OWN TIMING TEST.
// Write a function isPrime that takes an integer (less than a billion) and returns true if the integer is prime and false if it is not
// https://en.wikipedia.org/wiki/Prime_number



function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    
    // check from 2 to n - 1
    for (var i = 0; i <= n; i++) { // logical bug 🐞
        if (n % i == 0) {           // assignment vs comparison bug 🐛
            return false;
        } else                     // control-flow bug 🦟
            return true;
    }
}



isPrime(12);  //false
isPrime(13);  //true
isPrime(63);  //false
isPrime(67);  //true
isPrime(871); //false
isPrime(15485863);  //true
isPrime(15485869);  //false