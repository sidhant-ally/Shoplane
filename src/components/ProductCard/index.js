import React from 'react';
import "./index.css"
import { Link } from 'react-router-dom'
import { PATH } from '../../utils/constants';

const ProdcutCard = (props) => {
    const { id, name, description, preview } = props.product
    return (
        <Link to={`${PATH}/product/${id}`}>
            <div className="card m-2" style={{ width: "18rem" }}>
                <img className="card-img-top" src={preview} alt="Product" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <div className="btn btn-primary">Add to cart</div>
                </div>
            </div>
        </Link>
    );
}

export default ProdcutCard;
