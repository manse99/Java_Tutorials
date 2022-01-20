// to be a senior yopu have to be 55 yr and have a handicap greater than 7.
// input will consist of a list containing two items  age and handicap.


function openOrSenior(data){

    var data = [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]

    return data.map(([age, handicap]) => (age >= 55 && handicap > 7) ? 'Senior' : 'Open');
  }

