import React from 'react';

const Cart = ({cart}) => {

    const total = cart.reduce((total, item) => total + item.price, 0);

    console.log(total);

    return (
        <div>
            <p>length:{cart.length}</p>
        </div>
    );
};

export default Cart;