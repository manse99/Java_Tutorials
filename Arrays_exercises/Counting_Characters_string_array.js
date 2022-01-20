// we are given a string of characters and we are to count the number of times a character appears.//

// Using ES6 type conversions

const maxChar = (str) => {
    let obj = {}; // create a new object

    for (let char of str)
        (!obj[char]) ? obj[char] = 1 : obj[char]++; // if the character is present it equale 1 - count more than 1 occurance of a character.
    console.log(obj);
}
maxChar("ohhbsvvvvyeepjjjjjauiiiiiinsetvvv72888");