namespace Branch1;

public class Class1
{
    public void ReadFile()
    {
        var input = File.ReadAllText("input.txt");
        Console.WriteLine(input);

        var seedStrings = lines[0].Split(": ")[1].Split(' ');
        List<long> seeds = seedStrings.Select(long.Parse).ToList();

        List<Dictionary<long, long>> maps = new List<Dictionary<long, long>>();
     }
}

