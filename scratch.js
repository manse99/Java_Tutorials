const rangeOfCollatz = (c) => {
    const collatzSeq = {}

    const calculateCollatz = (n) => {
        if (collatzSeq[n]) return;
        if (n === 1) return;
        if (n % 2 === 0) {
            collatzSeq[n] = n / 2;
            calculateCollatz(n / 2)
        } else {
            collatzSeq[n] = n * 3 + 1;
            calculateCollatz(n * 3 + 1);
        }
    }
    for (let i = 1; i <= c; i++) {
        calculateCollatz(i);
    }
    return collatzSeq;
}

console.log(collatzSeq[20]);







