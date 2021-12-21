/* eslint-disable no-return-assign */

// Source: https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true

function staircase(n: number): void {
  // Write your code here
  for (let i = n; i > 0; i--) {
    let hash = '';
    let spaces = '';
    for (let j = i - 1; j < n; j++) {
      hash += '#';
    }
    for (let j = i - 2; j >= 0; j--) {
      spaces += ' ';
    }
    console.log(spaces + hash);
  }
}

function main() {
  console.log('---------- Cool Programing ----------\n');
  const a = 4;
  const result = staircase(a);
  console.log('Result: ', result);
}

main();
