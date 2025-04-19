import React, { useEffect, useRef } from "react";
import "../styles/SideMenu.css";
import { Link, useNavigate } from "react-router-dom";

function SideMenu({ isOpen, hideMenu }) {
    const menuRef = useRef(null);
    const overlayRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(e.target) &&
                overlayRef.current &&
                overlayRef.current.contains(e.target)
            ) {
                hideMenu();
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [hideMenu]);

    return (
        <div>
            {isOpen && <div className="overlay" ref={overlayRef} onClick={hideMenu}></div>}
            <div className={`side-menu ${isOpen ? "open" : ""}`} ref={menuRef}>
                <ul>
                    <h1 className="categories-header">Sections</h1>
                    <li>
                        <Link to="/home">Home</Link>
                        <div className="container"></div>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                        <div className="container"></div>
                    </li>
                    <li>
                        <Link to="/admin-add-category">Add New Category</Link>
                        <div className="container"></div>
                    </li>
                    <li>
                        <Link to="/post-item">Post Item</Link>
                        <div className="container"></div>
                    </li>
                    <li>
                        <button
                            className="logout-button"
                            onClick={() => {
                                localStorage.removeItem("isLoggedIn");
                                navigate("/login");
                            }}
                        >
                            Logout
                        </button>
                        <div className="container"></div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SideMenu;
