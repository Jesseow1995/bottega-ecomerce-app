import React, { Component } from 'react';

function CarButton({ className, icon }) {
    return (
        <div className={`${className} cart-button`}>
            <i className={icon}></i>
        </div>
    )
}

class ShopCart extends Component {
    render() {
        const { className } = this.props;
        return (
            <div className={`${className} shop-cart`}>

            </div>
        )
    }
}

export default ShopCart;