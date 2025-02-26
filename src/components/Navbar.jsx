import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
            <h1 className="text-xl font-bold">Graph Dashboard</h1>
            <div>
                <Link to="/" className="mx-2">Home</Link>
                <Link to="/about" className="mx-2">About</Link>
                <Link to="/contact" className="mx-2">Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;
