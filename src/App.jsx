import React, { useState, useEffect } from 'react';
import Profile from './pages/Profile';
import Home from './pages/Home';
import './styles/App.css';
import Header from './components/Header';
import AdminAddCategory from './pages/AdminAddCategory';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin-add-category" element={<AdminAddCategory />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
