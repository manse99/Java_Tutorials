/* Write a function called "convertScoreToGrade".

Given a score, "convertScoreToGrade" returns a string representing the letter grade corresponding to the given score.

Notes:

(100 - 90) --> 'A'
(89 - 80) --> 'B'
(79 - 70) --> 'C'
(69 - 60) --> 'D'
(59 - 0) --> 'F'
If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.
  */

function convertScoreToGrade(score) {
    // your code here
  
  if (score > 100 || score < 0) {
    return "INVALID SCORE";
  }
  if (score < 60) {
    return "F";
  }
  if (score < 70) {
    return "D";
  }
  if (score < 80) {
    return "C";
  }
  if (score < 90) {
    return "B";
  } else {
      return "A";
  }
}

  var output = convertScoreToGrade(94);
  console.log(output); // --> 'A


