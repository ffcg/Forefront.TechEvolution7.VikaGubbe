export function parseInput(input: string) {
  return input
    .trim()
    .split("\n")
    .map((line) => {
      const [hand, bid] = line.split(" ");
      return { hand, bid: parseInt(bid) };
    });
}
