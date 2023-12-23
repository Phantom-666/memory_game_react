import React from 'react'
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Game from './components/Game/Game';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/game" exact element={<Game/>} />
      </Routes>
    </Router>
  );
}

export default App;
