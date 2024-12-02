using System;

class Program
{

    static void Main(string[] args)
    {
        string[] possibleCards = { "A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2" };

        GetAHandOfRandomCards(possibleCards, 5);
    }

    static string[] GetAHandOfRandomCards(string[] deck, int count)
    {
        Random random = new Random();
        string[] selectedCards = new string[count];

        for (int i = 0; i < count; i++)
        {
            int randomIndex = random.Next(deck.Length); // Generate a random index
            selectedCards[i] = deck[randomIndex]; // Select the card
        }

        return selectedCards;
    }

    // Function to look at a hand and output its "type" according to the advent of code assignment
    static string GetHandType(string[] hand)
    {
        var cardRanks = hand.GroupBy(card => card)
                            .Select(group => new { Card = group.Key, Count = group.Count() })
                            .OrderByDescending(group => group.Count)
                            .ThenByDescending(group => group.Card)
                            .ToList();

        return cardRanks switch
        {
            var ranks when ranks.Count == 5 => "High Card",
            var ranks when ranks[0].Count == 4 => "Four of a Kind",
            //Add rest of cards
        };
    }

    // Function to compare "type" and somehow logically tell which one is biggest
}
