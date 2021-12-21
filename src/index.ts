/* eslint-disable no-return-assign */

// Source: https://www.hackerrank.com/challenges/birthday-cake-candles/problem?isFullScreen=true

function birthdayCakeCandles(candles: number[]): number {
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

  function countMax(array: number[], maxNum: number) {
    let count = 0;
    array.forEach((element) => {
      if (element === maxNum) {
        count++;
      }
    });
    return count;
  }

  const maxTall = getMax(candles);

  return countMax(candles, maxTall);
}

function main() {
  console.log('---------- Cool Programing ----------\n');
  const a = [3, 2, 1, 3];
  const result = birthdayCakeCandles(a);
  console.log('Result: ', result);
}

main();
