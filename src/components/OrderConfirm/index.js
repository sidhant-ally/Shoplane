import React from 'react';
import "./index.css"

const OrderConfirm = () => {
    return (
        <div className="order-confirm">
            <img src="https://shoplane.netlify.app/img/img_confirm.png" alt="" />
            <h3>Order Placed Successfully!!</h3>
            <p>We have sent you an email with the order details</p>
        </div>
    );
}

export default OrderConfirm;