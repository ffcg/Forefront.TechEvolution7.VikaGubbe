using System;
using System.Collections.Generic;

class Program
{

    static void Main(string[] args)
    {

        //initialize the monkeys and give them the starting items
        //didnt understand assignment very well, sorry hehe

    }
}

class Monkey
{
    public List<int> StartingItems { get; set; }
    public bool Operation { get; set; } // If true then use multiplication in the operation, if false then use plus, also feel free to rename
    public Func<int, bool> Test { get; set; }

    public Monkey(List<int> startingItems, bool operation, Func<int, bool> test)
    {
        StartingItems = startingItems;
        Operation = operation;
        Test = test;
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

}
