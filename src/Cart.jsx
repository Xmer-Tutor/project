import React from 'react';
import './cart.css';

const Cart = ({ cartItems, checkout, courses }) => {
    const cartRows = courses.reduce((list, type) => {
        const selected = type.courses.filter(({ id }) => cartItems.indexOf(id) >= 0);

        if(selected.length === 0) {
            return list;
        }

        return [...list, {
            type: type.type,
            courses: selected
        }];
    }, [])
    .map(({ type, courses }) => (
        <div className='type' key={type}>
            <h3>{type}</h3>
            {courses.map(({id, title, price}) => (
                <div className='row' key={id}>
                    <div>
                        {title}
                    </div>
                    <div>
                        ${price}
                    </div>
                </div>
            ))}
        </div>
    ));

    return (
        <div className='cart'>
            <h1>
                My Cart
            </h1>

            {cartRows}

            <div className='checkout'>
                <button
                    onClick={checkout}
                >
                    Checkout
                </button>
            </div>
        </div>
    )
}

export default Cart;