import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
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
            <div className="header-left">
                <div onClick={showSideMenu} className="menu">
                    {isMenuOpen ? (
                        <SideMenu isOpen={isMenuOpen} hideMenu={hideSideMenu} />
                    ) : (
                        <FontAwesomeIcon className="menu-icon" icon={faBars} size="lg" />
                    )}
                </div>
                <h1
                    className="sharegoods-logo"
                    onClick={() => navigate("/Home")}
                >
                    Sharegoods
                </h1>
            </div>

            <FontAwesomeIcon
                className="profile-icon"
                onClick={handleProfileNavigation}
                icon={faUser}
                size="lg"
            />
        </div>
    );
}

export default Header;
