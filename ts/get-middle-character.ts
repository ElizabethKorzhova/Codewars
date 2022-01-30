/*
You are going to be given a word. Your job is to return the middle character of the word.
If the word's length is odd, return the middle character.
If the word's length is even, return the middle 2 characters.
 */

export class Challenge {
  static getMiddle(s: string) {
    return s.length % 2 === 0
      ? s.charAt(s.length - s.length / 2 - 1) +
          s.charAt(s.length - s.length / 2)
      : s.charAt(Math.floor(s.length - s.length / 2));
  }
}
