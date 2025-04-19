import React from "react";
import "../styles/Badge.css";

function Badge() {
    return (
        <div>
            <div className="badge-container">
                <div className="badge-header">
                    <h1>My Badges</h1>
                    <p>⭐ 360</p>
                    <p className="badge-rank">Your Rank is Bronze</p>
                </div>
                <div className="badge-content">
                    <p className="badge-description">
                        This badge is awarded for exceptional performance and contributions.
                    </p>
                </div>
                <h2>Badge History</h2>
                <ul className="badge-list">
                    <li className="badge-item">
                        ⭐ 140 - Awarded on 2025/1/15
                    </li>
                    <li className="badge-item">
                        ⭐ 120 - Awarded on 2025/1/16
                    </li>
                    <li className="badge-item">
                        ⭐ 100 - Awarded on 2025/1/17
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Badge;
