/* eslint-disable no-return-assign */

// Source: https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true

function miniMaxSum(arr: number[]): void {
  // Write your code here
  function getMax(array: number[]): number {
    let max = array[0];
    array.forEach((element) => {
      if (max < element) {
        max = element;
      }
    });
    return max;
  }
  function getMin(array: number[]): number {
    let min = array[0];
    array.forEach((element) => {
      if (element < min) {
        min = element;
      }
    });
    return min;
  }
  function getSumAndSkip(array: number[], skip: number): number {
    let sum = 0;
    let skipped = false;
    array.forEach((element) => {
      if (element !== skip || skipped) {
        sum += element;
      }
      if (skip === element) {
        skipped = true;
      }
    });
    return sum;
  }

  const mayorNum = getMax(arr);
  const minNum = getMin(arr);
  const mayorSum = getSumAndSkip(arr, mayorNum);
  const menorSum = getSumAndSkip(arr, minNum);
  console.log(mayorSum, menorSum);
  // console.log('menorSum: ', menorSum);
}

function main() {
  console.log('---------- Cool Programing ----------\n');
  const a = [1, 2, 3, 4, 5];
  const result = miniMaxSum(a);
  console.log('Result: ', result);
}

main();
