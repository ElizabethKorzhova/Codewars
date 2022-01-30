/*
Write a function which calculates the average of the numbers in a given list.
Empty arrays should return 0.
 */

export function findAverage(array: number[]): number {
  return array.length
    ? array.reduce((acc, currentNumber) => currentNumber + acc, 0) /
        array.length
    : 0;
}
