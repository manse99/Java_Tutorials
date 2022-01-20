function getDeck() {

    var suits = ["spades", "diamonds", "clubs", "hearts"];
    var values = ["A", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    const cards = [];
    for (let s = 0; s < suits.length; s++) {

        for (let v = 0; v < values.length; v++) {

            const value = values[v];

            const suit = suits[s];

            cards.push({ value, suit });
        }
    }
    return cards;
}
console.log(getDeck());

/* Shuffling the deck pick 2 random locations on the
 deck then switch the values around about 1000 times */

function shuffle(deck) {
    // for 1000 turns
    //switch the values of the two random cards in
    for (var i = 0; i < 1000; i++) {
        var location1 = Math.floor((Math.random() * deck.length));
        var location2 = Math.floor((Math.random() * deck.length));
        var tmp = deck[location1];

        deck[location1] = deck[location2];
        deck[location2] = tmp;

    }
}
console.log(shuffle(deck));