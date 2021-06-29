import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom"
import { PATH } from "../../utils/constants"
import "./index.css"

const NavBar = ({ cart, clothingRef, accessoryRef }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
            <Link className="navbar-brand" to={`${PATH}`}><span style={{ color: "#009688" }}>SHOP</span>LANE</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to={`${PATH}`}>
                            <div className="nav-link" onClick={() => clothingRef?.current?.scrollIntoView()}>
                                CLOTHING
                            </div>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`${PATH}`}>
                            <div className="nav-link" onClick={() => accessoryRef?.current?.scrollIntoView()}>
                                ACCESSORIES
                            </div>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={`${PATH}/cart`}>
                            CART<sup>{cart?.reduce((s, { quantity }) => s + quantity, 0)}</sup>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav >
    );
}


const mapStateToProps = (store) => ({
    cart: store.cart,
    clothingRef: store.clothingRef,
    accessoryRef: store.accessoryRef,
});

export default connect(mapStateToProps, null)(NavBar);