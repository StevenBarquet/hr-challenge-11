/* eslint-disable no-return-assign */

// Source: https://www.hackerrank.com/challenges/time-conversion/problem?isFullScreen=true

function timeConversion(s: string): string {
  // Write your code here
  const hourTypeStarts = s.length - 2;
  const fullMinutes = s.substring(2, hourTypeStarts);
  const hourType = s.substring(hourTypeStarts, s.length);
  const justHour = s.substring(0, 2);

  let militarHour = '';

  if (justHour !== '12' && hourType === 'AM') {
    militarHour = justHour + fullMinutes;
  } else if (justHour !== '12' && hourType === 'PM') {
    const newHour = parseInt(justHour, 10) + 12;
    militarHour = newHour + fullMinutes;
  } else if (justHour === '12' && hourType === 'AM') {
    const newHour = '00';
    militarHour = newHour + fullMinutes;
  } else if (justHour === '12' && hourType === 'PM') {
    militarHour = justHour + fullMinutes;
  }
  return militarHour;
}

function main() {
  console.log('---------- Cool Programing ----------\n');
  const a = '07:05:45PM';
  const result = timeConversion(a);
  console.log('Result: ', result);
}

main();
