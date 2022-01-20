// given an array of words filter out the longest word given.
// Given an array, "getLengthOfLongestElement" 
// returns the length of the longest string in the given array.
//--------------------------------------------------------------------------//
/*function comments(arr) {

    if (newarr.length === 0) {
        return "There is no information";
    }
    let longstring = arr[0]; // setting a new variable to first index in arr.

    for (let i = 1; i < arr.length; i++) { // loop through
        if (arr.length[i] > longstring.length) {
            longstring = arr[i];
        }
    }
    return longstring.length;
}*/

var output = ([{
        userId: '88f24bea-3825-4237-a0d1-efb6b92d37a4',
        text: 'Great Job!'
    },
    {
        userId: '7f053852-7440-4e44-838c-ddac24611050',
        text: 'Well done, I think I understand now!'
    },
    {
        userId: 'e789565f-fa5a-4d5e-8f6c-dd126cf995be',
        text: 'How do you do that? 😲'
    },
    {
        userId: '7f053852-7440-4e44-838c-ddac24611050',
        text: 'OK great thanks'
    },
    {
        userId: 'b4a306cb-8b95-4f85-b9f8-434dbe010985',
        text: 'Cool, thanks!'
    },
    {
        userId: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6',
        text: 'Nice one 😉'
    },
    {
        userId: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c',
        text: 'Got it.'
    },
    {
        userId: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6',
        text: 'Thanks!'
    },
    {
        userId: '58a1e37b-4b15-47c1-b95b-11fe016f7b64',
        text: 'Cool 😀'
    },
    {
        userId: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c',
        text: 'Great stuff!'
    }
]);
console.table(output, ['userId', 'text']); // outputs array in a table format