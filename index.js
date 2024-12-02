function createMonkey(startingItems, operation, test, ifTrue, ifFalse) {
  return {
    items: startingItems,
    operation: operation,
    test: test,
    throwTo: (testResult) => (testResult ? ifTrue : ifFalse),
    inspections: 0,
  };
}
//Get data from txt file
const fs = require('fs');
fs.readFile('monkeys.txt', 'utf8', (err, data) => {
  if (err) {
    console.error("Failed to read the file:", err);
    return;
  }
})

const monkey0 = createMonkey(
  [74, 73, 57, 77, 74],
  (old) => old * 11,
  (newItem) => newItem % 19 === 0,
  6,
  7
);

const monkey1 = createMonkey(
  [99, 77, 79],
  (old) => old + 8,
  (newItem) => newItem % 19 === 0,
  2,
  0
);

const monkey2 = createMonkey(
  [64, 67, 50, 96, 89, 82, 82],
  (old) => old + 1,
  (newItem) => newItem % 13 === 0,
  1,
  3
);

const monkey3 = createMonkey(
  [88],
  (old) => old + 7,
  (newItem) => newItem % 17 === 0,
  0,
  1
);
const monkey4 = createMonkey(
  [80, 66, 98, 83, 70, 63, 57, 66],
  (old) => old + 4,
  (newItem) => newItem % 17 === 0,
  0,
  1
);
const monkey5 = createMonkey(
  [81, 93, 90, 61, 62, 64],
  (old) => old + 7,
  (newItem) => newItem % 17 === 0,
  0,
  1
);
const monkey6 = createMonkey(
  [69, 97, 88, 93],
  (old) => old * old,
  (newItem) => newItem % 17 === 0,
  0,
  1
);
const monkey7 = createMonkey(
  [59, 80],
  (old) => old + 6,
  (newItem) => newItem % 17 === 0,
  0,
  1
);
const monkeys = [monkey0, monkey1, monkey2, monkey3, monkey4, monkey5, monkey6, monkey7];
// Started to simulate rounds to test
for (let round = 0; round < 20; round++) {
  for (const monkey of monkeys) {
    const newItems = [];

    for (const item of monkey.items) {
      monkey.inspections++;
      const newItem = Math.floor(monkey.operation(item) / 3);
      const throwToMonkey = monkey.throwTo(monkey.test(newItem));
      monkeys[throwToMonkey].items.push(newItem);
    }
    monkey.items = newItems;
  }
}

const monkeyInspections = monkeys.map(monkey => monkey.inspections);
monkeyInspections.sort((a, b) => b - a);
const monkeyBusiness = monkeyInspections[0] * monkeyInspections[1];

console.log("Monkey Business:", monkeyBusiness);
