import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import './App.css';
import DumbCharades from './components/DumbCharades'; // adjust path as needed
import MakeAWord from './components/makeaword';
import EnglishToHindiGame from './components/engtohindiword'



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/charades" element={<DumbCharades />} />
        <Route path="/makeaword" element={<MakeAWord />} />
        <Route path="/eng-hindi" element={<EnglishToHindiGame />} />

      </Routes>
    </Router>
  );
}

export default App;



