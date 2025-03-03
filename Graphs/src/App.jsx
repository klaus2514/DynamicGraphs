import React, { useState } from "react";
import Graph from "./components/Graph";
import "./App.css";

const App = () => {
    const [device, setDevice] = useState("desktop");
    const [darkMode, setDarkMode] = useState(false);

    const handleDeviceChange = (e) => setDevice(e.target.value);
    const toggleDarkMode = () => setDarkMode(!darkMode);

    return (
        <div className={darkMode ? "dark-mode" : ""}> {/* Apply dark mode class */}
            {/* Navbar */}
            <nav className="navbar">
                <div className="logo">⚡ Assessment <span style={{ color: "green", fontSize: "0.8rem" }}>PRO</span></div>
                <ul>
                    <li>About Us</li>
                    <li>Learn More</li>
                    <li>Privacy Policy</li>
                </ul>
                <button className="dark-mode-toggle" onClick={toggleDarkMode}>
                    {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
                </button>
            </nav>

            {/* Main content */}
            <div className="main-container">
                <h1>SpeedVitals Internship Assessment</h1>

                {/* Device Selection Dropdown */}
                <div className="device-dropdown">
                    <label htmlFor="device">Choose a Device: </label>
                    <select id="device" value={device} onChange={handleDeviceChange}>
                        <option value="desktop">Desktop</option>
                        <option value="mobile">Mobile</option>
                    </select>
                </div>

                {/* Graphs Section */}
                <div className="graphs-container">
                    <div className="graph-card">
                        <h2>Cumulative Layout Shift</h2>
                        <Graph metric="cls" device={device} />
                    </div>

                    <div className="graph-card">
                        <h2>Largest Contentful Paint</h2>
                        <Graph metric="lcp" device={device} />
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer>
                <p>Copyright © 2025</p>
            </footer>
        </div>
    );
};

export default App;
