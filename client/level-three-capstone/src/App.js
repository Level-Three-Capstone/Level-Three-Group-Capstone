import './App.css';
import MemeInput from './components/MemeInput';
import Header from './components/Header';
import { useState } from 'react';
import MemeHistory from './components/MemeHistory';

export default function App() {
  const [memeHistory, setMemeHistory] = useState([]);
  const [currentMeme, setCurrentMeme] = useState(null);

  function addMemeToHistory(newMeme) {
    setMemeHistory(prevMemes => [...prevMemes, newMeme]);
  }

  return (
    <div className="App">
      <Header />
      <MemeInput setCurrentMeme={setCurrentMeme} addMemeToHistory={addMemeToHistory} />
      <MemeHistory memeHistory={memeHistory} />
    </div>
  );
}
