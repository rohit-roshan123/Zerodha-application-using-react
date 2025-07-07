import React, { useState } from 'react';

function ShoppingCart() {
    const [cartCount, setCartCount] = useState(0);
    
    const addItem = () => {
        const currentItems = sessionStorage.getItem('cartItems') || '0';
        const newCount = parseInt(currentItems) + 1;
        sessionStorage.setItem('cartItems', newCount);
        setCartCount(newCount);
        alert('Item added! Total: ' + newCount);
    };
    
    const showCart = () => {
        const items = sessionStorage.getItem('cartItems') || '0';
        setCartCount(parseInt(items));
    };
    
    const clearCart = () => {
        sessionStorage.removeItem('cartItems');
        setCartCount(0);
        alert('Cart cleared!');
    };
    
    return (
        <div>
            <h1>Using Session Storage</h1>
            <h1>My Shopping Cart</h1>
            
            <button onClick={addItem}>Add Item</button>
            <button onClick={showCart}>Show Cart</button>
            <button onClick={clearCart}>Clear Cart</button>
            
            <p>Cart has: {cartCount} items</p>
        </div>
    );
}

export default ShoppingCart;