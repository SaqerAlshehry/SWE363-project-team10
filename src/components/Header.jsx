import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import "../styles/Avatar.css";
import "../styles/Header.css";
import { useNavigate } from "react-router-dom";
import SideMenu from './SideMenu';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigate = useNavigate();

    function handleProfileNavigation() {
        navigate("/profile");
    }
    function showSideMenu() {
        setIsMenuOpen(true);
    }
    function hideSideMenu() {
        setIsMenuOpen(false);
    }

    return (
        <div className="header-container">
            <div onClick={showSideMenu} className="menu">
                {isMenuOpen ? (
                    <SideMenu isOpen={isMenuOpen} hideMenu={hideSideMenu} />
                ) : (
                    <FontAwesomeIcon className="menu-icon" icon={faBars} size="2x" />
                )}
            </div>
            <FontAwesomeIcon className="profile-icon" onClick={handleProfileNavigation} icon={faUser} size="2x" />

        </div>
    );
}

export default Header;
