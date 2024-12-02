import React {useState}from 'react';
import './App.css';

interface HandData {
  hand: string;
  bid: number;
}
const App: React.FC = () => {

  // read data and save in an state


  const [inputData, setInputData] = useState<string[]>([]);

  return (
    <div className="App">

    </div>
  );
};

export default App;