/*
this is a CHESSBOARD program using an 8 x 8 board
and two for loops */

var size = 8; // size of the board

var board = ""; // board name

for (var y = 0; y < size; y++) {
    for (var x = 0; x < size; x++) {
        if ((x + y) % 2 === 0) {
            board += " ";
        } else {
            board += "&"; // the board type
        }
    }
    board += "\n"
}

console.log(board);