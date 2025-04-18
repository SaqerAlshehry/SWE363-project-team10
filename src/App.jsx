import React from 'react';
import Profile from './pages/Profile';
import Home from './pages/Home';
import './styles/App.css';
import Header from './components/Header';
import AdminAddCategory from './pages/AdminAddCategory';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import ItemDetails from './pages/ItemDetails';
import PostItem from './pages/PostItem';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function Layout() {
  const location = useLocation();
  const hideHeader = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <>
      {!hideHeader && <Header />}
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin-add-category" element={<AdminAddCategory />} />
        <Route path="/item-details" element={<ItemDetails />} />
        <Route path="/post-item" element={<PostItem />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
