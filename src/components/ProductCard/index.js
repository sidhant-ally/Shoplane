import React from 'react';
import "./index.css"
import { Link } from 'react-router-dom'
import { PATH } from '../../utils/constants';
import { connect } from 'react-redux';
import { getCart } from '../../redux/actions';

const ProdcutCard = (props) => {
    const { id, name, description, preview } = props.product
    return (
        // <Link to={`${PATH}/product/${id}`}>
        <div className="card m-2" style={{ width: "18rem" }}>
            <img className="card-img-top" src={preview} alt="Product" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <button className="btn btn-primary" onClick={() => props.updateCart(props.product)}>Add to cart</button>
            </div>
        </div>
        // </Link>
    );
}


const mapDispatchToProps = (dispatch) => ({
    updateCart: (payload) => dispatch(getCart(payload)),
});

export default connect(null, mapDispatchToProps)(ProdcutCard);
