import React, { useState, useEffect } from 'react';
import axios from "axios"
import "./index.css"

const PDP = (props) => {
    const { id } = props.match.params
    const [loading, updateLoading] = useState(true)
    const [product, updateProduct] = useState({})
    const [selectedPic, updateSelection] = useState(0)

    const { name = "Product Name", brand = "Product Brand", price = 0, photos = [] } = product;

    const handleOnClick = (event) => updateSelection(parseInt(event.target.id))

    useEffect(() => {
        console.log(`Fetching product ${id}`)
        axios.get(`https://5d76bf96515d1a0014085cf9.mockapi.io/product/${id}`)
            .then(res => {
                updateProduct(res.data)
                updateLoading(false)
            })
            .catch(err => alert(err))
    }, [id])

    return loading ? <div>Loading...</div> : (
        <div className="product">
            <img id="product-image" alt="Product" src={photos.length ? photos[selectedPic] : ""} />
            <div className="product-details">
                <h1 id="product-name">{name}</h1>
                <h4 id="product-brand">{brand}</h4>
                <h3>Price: Rs <span id="product-price">{price}</span></h3>
                <div>
                    <h3>Description</h3>
                    <p id="product-description">Product Description</p>
                </div>
                <div>
                    <h3>Product Preview</h3>
                    <div className="product-preview">
                        {
                            photos.map((photo, index) => {
                                let className = "preview-image"
                                if (index === selectedPic)
                                    className = "preview-image preview-selected"
                                return <img key={index} onClick={handleOnClick} id={index} className={className} src={photo} alt="Product" />
                            })
                        }
                    </div>
                </div>
                <button className="cart">
                    Add To Cart
                </button>
            </div>
        </div >
    );
}

export default PDP;