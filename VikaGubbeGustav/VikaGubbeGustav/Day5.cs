using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

public class Day5
{
  

    // Seed 79 corresponds to soil 81
    public static void SeedToSoil(string[] lines)
    {
        
        string[] seedStrings = lines[0].Split(": ")[1].Split(' ');
        List<long> seeds = seedStrings.Select(long.Parse).ToList();
        List<long> soil = new List<long>();
        
        // Seed to Seed-to-Soil Map
        var start = 50;
        var SourceTarget = 98; // corresponds to soil number 50
        var rangeLength = 2;
        

    }
    
    public static void Main()
    {
        string[] lines = File.ReadAllLines("input.txt");
        SeedToSoil(lines);
    }

    //Sorry i didnt understand the task ¯\_( :( )_/¯

}
