import React from 'react';
import HomePage from './pages/HomePage';
import Header from './components/Header/Header';
import {HashRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
