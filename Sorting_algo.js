


function findsmallest(arr){
    smallest = arr[0];
    smallest_index = 0;

    for(i = 1; i < arr.length; i++){
        if( arr[i] < smallest){
            smallest = arr[i];
            smallest_index = i;
        }
        return smallest_index;
    }
}

function selectionSort(arr) {
    newArr = [];
    for (i = 0; i < arr.length; i){
        smallest = findSmallest(arr, i);
        newArr.push(arr.pop(smallest));
    }
    return newArr;
}
console.log(selectionSort([2, 7, 6, 9, 66, 92, 52, 2, 10]));
console.log(findsmallest([2, 7, 6, 9, 66, 92, 52,]));