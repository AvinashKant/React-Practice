import { useState } from "react";
import "../assets/css/sibebartoggle.css";

export default function SidebarToggle() {
    const [showMenu, setShowMenu] = useState(true)
    return (
        <div className="sidebar">
            <button className="toggle-btn" onClick={() => setShowMenu(!showMenu)}  >Open</button>

            <nav className={`nav-menu ${showMenu ? "show" : "hide"}`}>
                <ul className="nav-list">
                    <li className="nav-item">Home</li>
                    <li className="nav-item">About</li>
                    <li className="nav-item">Content</li>
                    <li className="nav-item">Form</li>
                </ul>
            </nav>
        </div>
    );

}