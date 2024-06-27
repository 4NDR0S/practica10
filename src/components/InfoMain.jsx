import React, { useState } from 'react';

export default function InfoMain() {
    const [contador, setContador] = useState(0);

    const handleIncrement = () => {
        setContador(contador + 1);
    }

    const handleDecrement = () => {
        if (contador > 0) {
            setContador(contador - 1);
        }
    }

    return (
        <div className='info-main'>
            <p className='company-title'>SNEAKER COMPANY</p>
            <h2 className='name-info'>Fall Limited Edition Sneakers</h2>
            <p className='info'>These low-profile sneakers are your perfect casual wear companion, Featuring a durable rubber outer sole, they'll withstand everything the wear con offer.</p>
            <div className='price'>
                <h2>$125.00</h2>
                <span className='discount'>50%</span>
            </div>
            <span className='original-price'>$250.00</span>

            <div className='counter-button'>
                <div className='counter'>
                    <button onClick={handleDecrement}>−</button>
                    <span>{contador}</span>
                    <button onClick={handleIncrement}>+</button>
                </div>
                <button className='add-cart-button'>🛒 Add to cart</button>
            </div>
        </div>
    )
}
