import React from 'react';
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
            <a className="navbar-brand" href="/"><span style={{ color: "#009688" }}>SHOP</span>LANE</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">HOME </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/clothing">CLOTHING</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/accessories">ACCESSORIES</Link>
                    </li>
                </ul>
            </div>
        </nav >
    );
}

export default NavBar;