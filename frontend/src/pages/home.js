import React from 'react';
import games from '../data/games';
import GameCard from '../components/gamecard';

const Home = () => {
  return (
    <div className="flex flex-wrap justify-center mt-6">
      {games.map(game => (
        <GameCard key={game.id} game={game} />
      ))}``
    </div>
  );
};

export default Home;
