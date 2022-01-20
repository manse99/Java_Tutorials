

function computeAverageOfNumbers(numbers){
    if (numbers.length === 0){
        return 0;
    }

    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    return sum / numbers.length;
}

var input1 = [1,2,3,4,5.8989,9.3377, 0.7737];
var result1 = computeAverageOfNumbers(input1);
console.log('should log 3.7157571428571434:', result1);

var input2 = [];
var result2 = computeAverageOfNumbers(input2);
console.log('should log 0:', result2);