// assert testing with three parameters//

function assertEqual(actual, expected, assertEqual) {

}


function multiplyByTwo(n) {
    return n * 2;
}


var output = multiplyByTwo(8); // returns 16
//console.log(output === 16); // should log true to the console.log
var output = multiplyByTwo(2) // should return 4
    // if output and expected result match
    // log "passed" to the console.log
    // otherwise log "failed +"assertEqual, expected and what the actual result is
    // value returned from the function was.
var actual = output;
var expected = (16, 4);
var testName = " it doubles our number";