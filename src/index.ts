/* eslint-disable no-return-assign */

// Source: https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=true

function plusMinus(arr: number[]): void {
  // Write your code here
  const { length } = arr
  let positives = 0;
  let negative = 0;
  let neutrals = 0;

  for (let i = 0; i < length; i++) {
    const element = arr[i];
    if( element > 0){
      positives++
    } else if( element < 0 ){
      negative++
    } else {
      neutrals++
    }
  }

  console.log('Positives: ', positives/length);
  console.log('Negative: ', negative/length);
  console.log('Neutrals: ', neutrals/length);
  
}

function main() {
  console.log('---------- Cool Programing ----------\n');
  const a = [-4, 3, -9, 0, 4, 1]
  const result = plusMinus(a);
  console.log('Result: ', result);
}

main();
