function createMonkey(startingItems, operation, test, ifTrue, ifFalse) {
    return {
        items: startingItems,
        operation: operation,
        test: test,
        throwTo: (testResult) => testResult ? ifTrue : ifFalse,
        inspections: 0
    };
}

const monkey0 = createMonkey(
    [79, 98],
    (old) => old * 19,
    (newItem) => newItem % 23 === 0,
    2,
    3
);

const monkey1 = createMonkey(
    [54, 65, 75, 74],
    (old) => old + 6,
    (newItem) => newItem % 19 === 0,
    2,
    0
);

const monkey2 = createMonkey(
    [79, 60, 97],
    (old) => old * old,
    (newItem) => newItem % 13 === 0,
    1,
    3
);

const monkey3 = createMonkey(
    [74],
    (old) => old + 3,
    (newItem) => newItem % 17 === 0,
    0,
    1
)