function gabe() {

    for (var i = 1; i < 500; i++) {
        if (i % 15 == 0) {
            console.log("FizzBuzz");

        } else if (i % 3 == 0) {
            console.log("Fizz");

        } else if (i % 5 == 0) {
            console.log("Buzz");

        } else console.log(i);
    }
}
let ranNum = Math.floor(Math.random() * 2) ;
console.log(ranNum);
var output = gabe(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
console.log(output * ranNum);