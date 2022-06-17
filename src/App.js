import React from 'react';
import HomePage from './pages/HomePage';
import Header from './components/Header/Header';
import {HashRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/article" element={<HomePage/>} render={() => {
            <Navigate to="/Home" />
          }} />
          <Route exact path="/Home" element={<HomePage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
