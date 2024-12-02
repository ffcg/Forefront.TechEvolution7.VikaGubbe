import { parseInput } from './Utils/inputParser';
import React {useState}from 'react';
import './App.css';

interface HandData {
  hand: string;
  bid: number;
}
const App: React.FC = () => {

  // read data and save in an state


  const [inputData, setInputData] = useState<HandData[]>([]);
  const [totalWinnings, setTotalWinnings] = useState<number>(0);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const input = event.target.value;
    const hands = parseInput(input);
    setInputData(hands);
    const winnings = calculateWinnings(hands);
  }

  return (
    <div className="App">

    </div>
  );
};

export default App;