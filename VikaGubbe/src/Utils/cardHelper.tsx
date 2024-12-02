
export function determineType(hand: string) {
  //this one should return what type the hand is

  const charCounts: Record<string, number> = {};

  for (const char of hand) {
    if (charCounts[char]) {
      charCounts[char]++;
    } else {
      charCounts[char] = 1;
    }
  }
}
export function alphabetToNumber(char: string) {
  //this one should return the number value of the card
  const cardValues: Record<string, number> = {
    A: 14,
    K: 13,
    Q: 12,
    J: 11,
    T: 10,
  };

  return cardValues[char] || parseInt(char);
}
