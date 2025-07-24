import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 text-white px-4 py-3 flex justify-between">
      <h1 className="text-xl font-bold">🎲 The Game Room</h1>
      <div>
        <a href="/" className="mx-2 hover:underline">Home</a>
        <a href="/about" className="mx-2 hover:underline">About</a>
      </div>
    </nav>
  );
};

export default Navbar;
