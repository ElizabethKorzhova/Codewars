/*
You get an array of numbers, return the sum of all of the positives ones.
If there is nothing to sum, the sum is default to 0.
 */

export function positiveSum(arr: number[]): number {
  return arr.reduce(
    (acc, currentItem) => (currentItem > 0 ? currentItem + acc : acc),
    0
  );
}
