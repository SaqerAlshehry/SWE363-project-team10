import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import './styles/App.css';
import Header from './components/Header';
import Profile from './pages/Profile';
import Home from './pages/Home';
import AdminAddCategory from './pages/AdminDashboard';
import ItemDetails from './pages/ItemDetails';
import PostItem from './pages/PostItem';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ManageListingDetails from "./pages/ManageListingDetails";


function Layout() {
  const location = useLocation();
  const hideHeader = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div>
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
        <Route path="/manage-listing-details" element={<ManageListingDetails />} />
      </Routes>

    </div>
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