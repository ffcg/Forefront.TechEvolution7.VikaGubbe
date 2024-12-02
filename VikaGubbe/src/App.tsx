import { parseInput } from './Utils/inputParser';
import React, { useState } from 'react';
import './App.css';

interface HandData {
  hand: string;
  bid: number;
}

//dont forget to look at the utils folder


const App: React.FC = () => {
  // State to store parsed input data
  const [inputData, setInputData] = useState<HandData[]>([]);
  const [totalWinnings, setTotalWinnings] = useState<number>(0);

  // Handle input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    try {
      const hands = parseInput(input);
      console.log(hands)
      setInputData(hands);
      const winnings = calculateWinnings(hands);
      setTotalWinnings(winnings);
      console.log(winnings) //doesnt work winnings is 0, maybe parse is wrong
    } catch (error) {
      console.error('Error parsing input:', error);
      setInputData([]); // Reset data on parse failure
    }
  };

  // Example rules for calculating winnings
  const handValues: { [key: string]: number } = {
    "Royal Flush": 100,
    "Straight Flush": 75,
    "Four of a Kind": 50,
    "Full House": 25,
    "Flush": 20,
    "Straight": 15,
    "Three of a Kind": 10,
    "Two Pair": 5,
    "One Pair": 2,
    "High Card": 1,
  };

  const calculateWinnings = (hands: HandData[]): number => {
    return hands.reduce((total, handData) => {
      const handValue = handValues[handData.hand] || 0;
      console.log(`Hand: ${handData.hand}, Hand Value: ${handValue}, Bid: ${handData.bid}`);
      return total + handValue * handData.bid;
    }, 0);
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter hands and bids..."
        onChange={handleInputChange}
        className="input-field"
      />

      <div className="hand-data">
        {inputData.length > 0 ? (
          <ul>
            {inputData.map((data, index) => (
              <li key={index}>
                <strong>Hand:</strong> {data.hand}, <strong>Bid:</strong> {data.bid}
              </li>
            ))}
          </ul>
        ) : (
          <p>No data available. Enter hands to see results.</p>
        )}
      </div>

      {/* Uncomment and use if you calculate winnings */}
      <div className="winnings">
        <h2>Total Winnings: {totalWinnings}</h2>
      </div> 
    </div>
  );
};

export default App;
