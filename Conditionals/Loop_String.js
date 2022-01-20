// Loop over a string using the Method of .length//

function loopAString(string) {

    var index = 0;

    while (index < string.length) {
        console.log(string[index]);
        index++
    }
}

// loopAString('nodeJS');
// console output:
  // n
  // o
  // d
  // e
  // J
  // S

loopAString('abcd');
// console output:
  // a
  // b
  // c
  // d