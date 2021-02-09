import React, { Component } from 'react';

function CartButton({ className, icon }) {
    return (
        <div className={`${className} cart-button`}>
            <i className={icon}></i>
        </div>
    )
}

function CartContent({ className }) {
    let count = products.length;
    return (
        <div className={`${className} cart-content`}>
            <div className='cart-content__title'>
                Cart ({count})
            </div>
            <div className='cart-content__products'>

            </div>
            <div className='cart-content__footer'>

            </div>
        </div>
    )
}

class ShopCart extends Component {
    render() {
        const { className } = this.props;
        return (
            <div className={`${className} shop-cart`}>
                <CartButton className='shop-cart__toggle' icon='fas fa-times'></CartButton>
                <CartContent className='shop-cart__content' products={4}></CartContent>
            </div>
        )
    }
}

export default ShopCart;