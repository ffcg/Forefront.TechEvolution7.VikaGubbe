
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
