import React from 'react';
import { Link } from 'react-router-dom';

const GameCard = ({ game }) => {
  return (
    <Link to={game.route}>
      <div className="game-card">
        <img src={game.image} alt={game.name} />
        <h3>{game.name}</h3>
      </div>
    </Link>
  );
};

export default GameCard;
