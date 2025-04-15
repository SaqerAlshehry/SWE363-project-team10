import React from 'react';
import Profile from './pages/Profile';
import Home from './pages/Home';
import './styles/App.css';
import Header from './components/Header';
import AdminAddCategory from './pages/AdminAddCategory';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemDetails from './pages/ItemDetails';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin-add-category" element={<AdminAddCategory />} />
          <Route path="/item-details" element={<ItemDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
