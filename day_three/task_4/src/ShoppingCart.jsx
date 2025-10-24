import React, { useState } from 'react';

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Jollof Rice', price: 1500, quantity: 2 },
    { id: 2, name: 'Plantain', price: 500, quantity: 1 },
    { id: 3, name: 'Zobo Drink', price: 800, quantity: 1 },
  ]);

  function increaseQuantity (id) {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  function decreaseQuantity (id) {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  function removeItem (id) {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  function clearCart () {
    setCartItems([]);
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
   <div className='container'>
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id}>
            <span>
              {item.name} - ₦{item.price} x {item.quantity} = ₦
              {item.price * item.quantity}
            </span>
            <div className='btn'>
              <button onClick={() => increaseQuantity(item.id)}>+</button>
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          </div>
        ))
      )}

      <h3>Total: ₦{totalPrice.toLocaleString()}</h3>

      {cartItems.length > 0 && (
        <button onClick={clearCart}>Clear Cart</button>
      )}
    </div>
  );
}

export default ShoppingCart;
