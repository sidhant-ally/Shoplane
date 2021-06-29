import React from 'react';
import { connect } from "react-redux";
import ProductGrid from "../ProductGrid"
import "./index.css"

const Home = (props) => {
    const { clothing, accessory, loading, clothingRef, accessoryRef } = props

    return (
        <div className="App m-4">
            <div ref={clothingRef}>
                <h2 className="section-heading">Clothing for Men and Women</h2>
                <ProductGrid loading={loading} products={clothing} />
            </div>
            <div ref={accessoryRef}>
                <h2 className="section-heading">Accessories for Men and Women</h2>
                <ProductGrid loading={loading} products={accessory} />
            </div>
        </div>
    );
}

const mapStateToProps = (store) => ({
    clothing: store.clothing,
    accessory: store.accessory,
    clothingRef: store.clothingRef,
    accessoryRef: store.accessoryRef,
});


export default connect(mapStateToProps, null)(Home);