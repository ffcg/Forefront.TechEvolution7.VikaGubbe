using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

public class Day5
{
    public static void Main(string[] args)
    {
        string[] lines = File.ReadAllLines("input.txt");

        string[] seedStrings = lines[0].Split(": ")[1].Split(' ');
        List<long> seeds = seedStrings.Select(long.Parse).ToList();
    }

    //Sorry i didnt understand the task ¯\_( :( )_/¯

}
