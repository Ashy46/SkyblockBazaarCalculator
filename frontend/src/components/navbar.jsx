import React from "react";
import { Link } from "react-router-dom";
import BazaarMatrix from "./bazaarMatrix";

// Add a Home component
const Home = () => <div>Home Page</div>;

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/bazaar">Bazaar</Link>
                </li>
                <li>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
            </ul>
        </nav>
    );
}