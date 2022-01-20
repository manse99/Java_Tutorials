// Reversing Strings //

function reverseStrings(str) {
    return [...String(str)].reverse().join('');
}

console.log(reverseStrings('stackoverflow'));
console.log(reverseStrings(1337));
console.log(reverseStrings([1, 2, 3]));