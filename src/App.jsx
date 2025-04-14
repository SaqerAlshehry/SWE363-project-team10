import React, { useState, useEffect } from 'react';
import Profile from './pages/Profile';
import Home from './pages/Home';
import './styles/App.css';
import Header from './components/Header';
import AdminAddCategory from './pages/AdminAddCategory';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);
  useEffect(() => {
    if (isDarkMode) {

      document.body.classList.add('dark-mode');

      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div>
      <Router>
        <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
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
