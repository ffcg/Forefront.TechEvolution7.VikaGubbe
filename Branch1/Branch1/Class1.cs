namespace Branch1;

public class Class1
{
    public void ReadFile()
    {
        var input = File.ReadAllText("input.txt");
        Console.WriteLine(input);
    }
}