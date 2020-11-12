import React from "react";
import { Link } from "react-router-dom";

export const Header = () => (
    <header className={"main-header"}>
        <span className="main-logo">Yalantis React.js School test task</span>
        <ul className="links">
            <li>
                <Link to={"/employees"}>Employees</Link>
            </li>
            <li>
                <Link to={"/technologies"}>Technologies</Link>
            </li>
        </ul>
    </header>
);
