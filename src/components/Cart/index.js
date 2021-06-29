import React from 'react';
import { Link } from 'react-router-dom'
import { PATH } from '../../utils/constants';
import { connect } from 'react-redux';
import { clearCartProducts } from '../../redux/actions';
import "./index.css"

const Cart = ({ cart, clearCartProducts }) => {
    const totlaItem = cart.reduce((s, { quantity }) => s + quantity, 0)
    const totlaAmount = cart.reduce((s, { product: p, quantity }) => s + p.price * quantity, 0)

    return (
        <div id="cart">
            <h1>Checkout</h1>
            {
                totlaItem ?
                    <div className="cart-container">
                        <div className="left-side">
                            <p>Total Items: <span id="number-of-item">{totlaItem}</span></p>
                            <div className="cart-items" id="cart-item-container">
                                {cart.map(({ product, quantity }) => {
                                    return <div className="item">
                                        <img src={product.preview} alt={product.name} />
                                        <div className="detail">
                                            <h3>{product.name}</h3>
                                            <p>x{quantity}</p>
                                            <p>Amount: {product.price * quantity}</p>
                                        </div>
                                    </div>
                                })}
                            </div>
                        </div>
                        <div className="right-side">
                            <div className="total-amount">
                                <h2>Total Amount</h2>
                                <p>Rs <span id="total-amount">{totlaAmount}</span></p>
                                <Link to={`${PATH}/orderconfirm`} >
                                    <button id="place-order" onClick={() => clearCartProducts()}>Place Order</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    : <p> Cart is empty </p>
            }
        </div >
    );
}

const mapStateToProps = (store) => ({
    cart: store.cart,
});

const mapDispatchToProps = (dispatch) => ({
    clearCartProducts: () => dispatch(clearCartProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);