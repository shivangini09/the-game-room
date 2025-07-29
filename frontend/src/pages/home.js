import React from 'react';
import '../App.css';


const games = [
  { title: "Dumb Charades", image: "/dumbcharades.webp" },
  { title: "Guess the Song", image: "/images/guess-song.jpg" },
  { title: "Rapid Fire", image: "/images/rapid-fire.jpg" },
  // add more here
];

function Home() {
  return (
    <div>
      <h1 className="main-heading">🎉 Welcome to The Game Room</h1>
      <p className="tagline">Make your evening gamey with friends & fun!</p>

      <div className="game-container">
  {games.map((game, index) => (
    <div key={index} className="game-card">
      <img src={game.image} alt={game.title} />
      <h3>{game.title}</h3>
    </div>
  ))}
</div>

    </div>
  );
}

export default Home;
