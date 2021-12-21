/* eslint-disable no-return-assign */

// Source: https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true

function gradingStudents(grades: number[]): number[] {
  // Write your code here

  function toRound(grade: number): number {
    const next5 = 5 - (grade % 5);
    const willRound = grade >= 38 && next5 < 3;
    if (willRound) {
      return grade + next5;
    }
    return grade;
  }
  const fixedGrades = grades.map((element) => toRound(element));

  return fixedGrades;
}

function main() {
  console.log('---------- Cool Programing ----------\n');
  const a = [73, 67, 45, 33];
  const result = gradingStudents(a);
  console.log('Result: ', result);
}

main();
