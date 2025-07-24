import React from 'react';
import { Link } from 'react-router-dom';

const GameCard = ({ game }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-4 w-64">
      <h2 className="text-xl font-semibold">{game.name}</h2>
      <p className="text-sm text-gray-600 mb-4">{game.description}</p>
      <Link to={game.route}>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
          Play
        </button>
      </Link>
    </div>
  );
};

export default GameCard;
