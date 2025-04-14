import React, { useEffect, useRef } from "react";
import "../styles/SideMenu.css";

function SideMenu({ isOpen, hideMenu }) {
    const menuRef = useRef(null);
    const overlayRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target) && overlayRef.current && overlayRef.current.contains(e.target)) {
                hideMenu();
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [hideMenu]);

    return (
        <div>
            {isOpen && <div className="overlay" ref={overlayRef} onClick={hideMenu}></div>}
            <div className={`side-menu ${isOpen ? "open" : ""}`} ref={menuRef}>
                <ul>
                    <h1 className="categories-header">Categories</h1>
                    <li>
                        <a href="/">Home</a>
                        <div className="container"></div> {/* Container under the choice */}
                    </li>
                    <li>
                        <a href="/profile">Profile</a>
                        <div className="container"></div> {/* Container under the choice */}
                    </li>
                    <li>
                        <a href="/admin-add-category">Add New Category</a>
                        <div className="container"></div> {/* Container under the choice */}
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                        <div className="container"></div> {/* Container under the choice */}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SideMenu;
