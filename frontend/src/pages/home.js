import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const games = [
  { title: "Dumb Charades", image: "/dumbchrades1.png", route: "/charades" },
  { title: "Make a Word", image: "/wordgame.png", route: "/makeaword" },
  { title: "Rapid Fire", image: "/images/rapid-fire.jpg", route: "/rapid-fire" },
  // add more here
];

function Home() {
  return (
    <div>
      <h1 className="main-heading">🎉 Welcome to The Game Room</h1>
      <p className="tagline">Make your evening gamey with friends & fun!</p>

      <div className="game-container">
        {games.map((game, index) => (
          <Link to={game.route} key={index} className="game-card">
            <img src={game.image} alt={game.title} />
            <h3>{game.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;

