import React, { useState, useEffect } from 'react';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function getRandomLetters() {
  const a = alphabet[Math.floor(Math.random() * 26)];
  let b = alphabet[Math.floor(Math.random() * 26)];
  while (b === a) b = alphabet[Math.floor(Math.random() * 26)];
  return [a, b];
}

function MakeAWord() {
  const [letters, setLetters] = useState(getRandomLetters());
  const [timer, setTimer] = useState(7);
  const [showWords, setShowWords] = useState(false);
  const [possibleWords, setPossibleWords] = useState([]);

  // Sample small word list (you can later load from JSON or API)
  const wordList = ['Apple', 'Axe', 'Antique', 'Angle', 'Algae', 'Badge', 'Bridge', 'Bubble', 'Bangle', 'Circle'];

  useEffect(() => {
    let interval;
    if (!showWords) {
      interval = setInterval(() => {
        setTimer(prev => {
          if (prev === 1) {
            clearInterval(interval);
            revealWords();
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [showWords]);

  const revealWords = () => {
    const [start, end] = letters;
    const matches = wordList.filter(word =>
      word.toUpperCase().startsWith(start) && word.toUpperCase().endsWith(end)
    );
    setPossibleWords(matches);
    setShowWords(true);
  };

  const restart = () => {
    setLetters(getRandomLetters());
    setTimer(7);
    setShowWords(false);
    setPossibleWords([]);
  };

  return (
    <div className="make-a-word-game">
      <h2>🧠 Make a Word</h2>
      <p className="game-description">
        You’ll get 2 random letters. Your challenge is to think of a real word that either <strong>starts</strong> with the first letter and <strong>ends</strong> with the second, or the other way around. ⏱️ You have 7 seconds to think!
      </p>

      <div className="letter-box">
        <span className="letter">{letters[0]}</span>
        <span className="and-text">and</span>
        <span className="letter">{letters[1]}</span>
      </div>

      {!showWords ? (
        <p className="timer">⏳ {timer} seconds left…</p>
      ) : possibleWords.length > 0 ? (
        <div className="results">
          <p>Here are some possible words:</p>
          <ul>
            {possibleWords.map((word, index) => (
              <li key={index}>{word}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="results">Oops! No common words found with those letters.</p>
      )}

      {showWords && <button onClick={restart}>🔁 Try Again</button>}
    </div>
  );
}

export default MakeAWord;
