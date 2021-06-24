import React from 'react';
import { Link } from "react-router-dom"
import { PATH } from "../../utils/constants"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
            <Link className="navbar-brand" to={`${PATH}`}><span style={{ color: "#009688" }}>SHOP</span>LANE</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to={`${PATH}`}> HOME </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={`${PATH}/clothing`}>CLOTHING</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={`${PATH}/accessories`}>ACCESSORIES</Link>
                    </li>
                </ul>
            </div>
        </nav >
    );
}

export default NavBar;