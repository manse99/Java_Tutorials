

// this is a function of n-cubes
// i'm coding two(2) version of this below.


function findNb(m) {
    let n = 0;
    while (m > 0) m -= (++n) ** 3;
    return m ? -1 : n;
}

function findNb(m) {
    // total used to account for n - series, up to the input m.
    let total = 0;
    // n initialized to zero (0).
    let n = 0;
    // until total equals m.
    while (total < m) {
        // increment i.
        n += 1;

        //add the measure with the prescribed exponent.
        total += Math.pow(n, 3);
    }

    // if the total matches return n.
    // else -1.
    return total === m ? n : -1;
}

console.log(findNb(3));




