// EnglishToHindiGame.js
import React, { useState, useEffect } from 'react';

const difficultyFilters = {
  easy: word => word.length <= 5,
  medium: word => word.length > 5 && word.length <= 7,
  hard: word => word.length > 7,
};

function EnglishToHindiGame() {
  const [difficulty, setDifficulty] = useState(null);
  const [word, setWord] = useState('');
  const [translation, setTranslation] = useState('');
  const [showTranslation, setShowTranslation] = useState(false);
  const [timer, setTimer] = useState(5);

  const startGame = async () => {
    setShowTranslation(false);
    setTimer(5);

    // 1. Fetch English words from Datamuse
    const res = await fetch('https://api.datamuse.com/words?ml=common&max=1000');
    const words = await res.json();
    const filtered = words.map(w => w.word).filter(w => difficultyFilters[difficulty](w));

    // 2. Pick a random word
    const randomWord = filtered[Math.floor(Math.random() * filtered.length)];
    setWord(randomWord);

    // 3. Fetch translation from LibreTranslate
    const transRes = await fetch(`https://translation.googleapis.com/language/translate/v2?key=YOUR_API_KEY`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          q: randomWord,
          source: 'en',
          target: 'hi',
          format: 'text'
        })
      });
      const data = await transRes.json();
      setTranslation(data.data.translations[0].translatedText);
      

    // 4. Countdown logic
    let counter = 5;
    const interval = setInterval(() => {
      counter--;
      setTimer(counter);
      if (counter === 0) {
        setShowTranslation(true);
        clearInterval(interval);
      }
    }, 1000);
  };

  return (
    <div className="eng-hindi-game">
      {!difficulty ? (
        <div>
          <h2>Select Difficulty</h2>
          <button onClick={() => setDifficulty('easy')}>Easy</button>
          <button onClick={() => setDifficulty('medium')}>Medium</button>
          <button onClick={() => setDifficulty('hard')}>Hard</button>
        </div>
      ) : (
        <div>
          <h2>Translate this word:</h2>
          <h3>{word}</h3>
          {!showTranslation ? (
            <p>⏳ {timer} seconds...</p>
          ) : (
            <p>💬 Hindi Meaning: <strong>{translation}</strong></p>
          )}
          <button onClick={startGame}>Next Word</button>
        </div>
      )}
    </div>
  );
}

export default EnglishToHindiGame;
