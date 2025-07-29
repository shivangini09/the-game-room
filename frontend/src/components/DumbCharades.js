import React, { useState } from 'react';
import '../App.css';

const dumbCharadesMovies = {
  easy: [ "Dilwale Dulhania Le Jayenge",
    "Kuch Kuch Hota Hai",
    "3 Idiots",
    "Kabhi Khushi Kabhie Gham",
    "Chennai Express",
    "Bajrangi Bhaijaan",
    "Jab We Met",
    "Zindagi Na Milegi Dobara",
    "Yeh Jawaani Hai Deewani",
    "Munna Bhai M.B.B.S.",
    "Hum Aapke Hain Koun",
    "Tanu Weds Manu",
    "Om Shanti Om",
    "Kal Ho Naa Ho",
    "Golmaal Returns",
    "Bhool Bhulaiyaa",
    "Student of the Year",
    "Koi Mil Gaya",
    "Kabir Singh",
    "Ra One"],
  medium: ["Barfi!",
    "Wake Up Sid",
    "Tamasha",
    "Andhadhun",
    "Kai Po Che",
    "Vicky Donor",
    "Badhaai Ho",
    "Rockstar",
    "Haider",
    "Article 15",
    "Drishyam",
    "Raazi",
    "Piku",
    "Luka Chuppi",
    "Bareilly Ki Barfi",
    "Band Baaja Baaraat",
    "Ek Tha Tiger",
    "Shubh Mangal Zyada Saavdhan",
    "Pyaar Ka Punchnama",
    "Sonu Ke Titu Ki Sweety"],
  hard: ["Matru Ki Bijlee Ka Mandola",
    "Ek Chalis Ki Last Local",
    "Dedh Ishqiya",
    "Tumbbad",
    "No Smoking",
    "The Xposé",
    "Mere Baap Pehle Aap",
    "Aagey Se Right",
    "Main Madhuri Dixit Banna Chahti Hoon",
    "Thoda Sa Roomani Ho Jaayen",
    "Jajantaram Mamantaram",
    "Hawa Hawai",
    "Mujhe Kucch Kehna Hai",
    "Chalo Dilli",
    "Bheja Fry",
    "Bol Bachchan",
    "Love Sex Aur Dhokha",
    "What’s Your Raashee?",
    "Saawariya",
    "Shaandaar"]
};

function getRandomMovie(level) {
  const movies = dumbCharadesMovies[level];
  return movies[Math.floor(Math.random() * movies.length)];
}

const DumbCharades = () => {
  const [level, setLevel] = useState(null);
  const [movie, setMovie] = useState("");

  const handleLevelSelect = (lvl) => {
    setLevel(lvl);
    setMovie(getRandomMovie(lvl));
  };

  const handleNextMovie = () => {
    setMovie(getRandomMovie(level));
  };

  const handleReset = () => {
    setLevel(null);
    setMovie("");
  };

  return (
    <div className="charades-container">
      {!level ? (
        <>
          <h2>Select a Difficulty</h2>
          <div className="difficulty-buttons">
            <button onClick={() => handleLevelSelect("easy")}>Easy</button>
            <button onClick={() => handleLevelSelect("medium")}>Medium</button>
            <button onClick={() => handleLevelSelect("hard")}>Hard</button>
          </div>
        </>
      ) : (
        <div className="charades-game">
          <h2>{level.charAt(0).toUpperCase() + level.slice(1)} Level</h2>
          <div className="movie-card">{movie}</div>
          <div className="charades-buttons">
            <button onClick={handleNextMovie}>Next Movie</button>
            <button onClick={handleReset}>Change Level</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DumbCharades;
