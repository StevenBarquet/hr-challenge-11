/* eslint-disable no-return-assign */

// Source: https://www.hackerrank.com/challenges/compare-the-triplets/problem?isFullScreen=true

function compareTriplets(a: number[], b: number[]): number[] {
  // Write your code here
  let aPoints = 0;
  let bPoints = 0;
  for (let index = 0; index < a.length; index++) {
      if(a[index]>b[index]){
        aPoints++
      } else if(b[index]>a[index]){
        bPoints++
      }
  }
  
  return [aPoints,bPoints];
}

function main() {
  console.log('---------- Cool Programing ----------\n');
  const a = [1, 2, 3]
  const b = [3, 2, 1]
  const result = compareTriplets(a, b);
  console.log('Result: ', result);
}

main();
