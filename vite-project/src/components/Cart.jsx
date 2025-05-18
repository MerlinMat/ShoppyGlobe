import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  // ✅ Log cart items in console for debugging
  console.log('Cart Items:', cartItems);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="border p-4 mb-2 rounded">
            {/* ✅ Try to show title or name */}
            <p className="font-semibold">{item.title || item.name || "No name found"}</p>
            <p>Price: ${item.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;



