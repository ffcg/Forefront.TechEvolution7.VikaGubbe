using System;
using System.Collections.Generic;

class Program
{

    static void Main(string[] args)
    {

        //initialize the monkeys and give them the starting items
        //didnt understand assignment very well, sorry hehe
        var monkeys = new List<Monkey>
        {
            new Monkey(
                new List<int> { 79, 98 },
                worryLevel => worryLevel * 19,
                worryLevel => worryLevel % 23 == 0,
                2,
                3 
            ),
            new Monkey(
                new List<int> { 54, 65, 75, 74 },
                worryLevel => worryLevel + 6, 
                worryLevel => worryLevel % 19 == 0, 
                2, 
                0  
            ),
            new Monkey(
                new List<int> { 79, 60, 97 },
                worryLevel => worryLevel * worryLevel, 
                worryLevel => worryLevel % 13 == 0, 
                1,
                3 
            ),
            new Monkey(
                new List<int> { 74 },
                worryLevel => worryLevel + 3,
                worryLevel => worryLevel % 17 == 0, 
                0, 
                1  
            )
        };

    }
}

class Monkey
{
    public List<int> StartingItems { get; set; }
    public Func<int, int> Operation { get; set; }
    public Func<int, bool> Test { get; set; }
    public int TrueMonkey { get; set; }
    public int FalseMonkey { get; set; } 
    public int InspectionCount { get; private set; }

    public Monkey(List<int> startingItems, Func<int, int> operation, Func<int, bool> test, int trueMonkey, int falseMonkey)
    {
        StartingItems = startingItems;
        Operation = operation;
        Test = test;
        TrueMonkey = trueMonkey;
        FalseMonkey = falseMonkey;
        InspectionCount = 0;
    }

    public void InspectItems()
    {
        for (int i = 0; i < StartingItems.Count; i++)
        {
            //Divide worry by 3?
            int currentItem = StartingItems[i];
            Console.WriteLine($"Monkey inspects item with worry level: {currentItem}");
        }
        
        // Clear items after inspection
        StartingItems.Clear();
    }

    public void Round0()
    {
        
    }

}
