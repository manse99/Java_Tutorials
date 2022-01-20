function getAllElementsButNth(array, n) {
    array.splice(n, 1) // at nth index, remove 1 item.
    return array
}




var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']