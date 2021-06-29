import React from 'react';
import "./index.css"
import { Link } from 'react-router-dom'
import { PATH } from '../../utils/constants';

const ProdcutCard = (props) => {
    const { id, name, brand, preview, price } = props.product
    return (
        <div class="product-card">
            <Link to={`${PATH}/product/${id}`}>
                <a href="/product/details.html?p=1">
                    <img class="product-image" src={preview} alt={name} />
                </a>
                <div class="product-meta">
                    <h4>{name}</h4>
                    <h5>{brand}</h5>
                    <p>Rs. {price}</p>
                </div>
            </Link>
        </div>
    );
}

export default ProdcutCard;
