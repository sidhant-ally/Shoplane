import React from 'react';
import { Link } from "react-router-dom"
import { PATH } from "../../utils/constants"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
            <Link className="navbar-brand" to={`${PATH}`}><span style={{ color: "#009688" }}>SHOP</span>LANE</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
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
                <Link to={`${PATH}/signin`} className="btn btn-outline-primary mr-2">Sign in</Link>
                <Link to={`${PATH}/signup`} className="btn btn-outline-primary mr-2">Sign up</Link>
            </div>
        </nav >
    );
}

export default NavBar;