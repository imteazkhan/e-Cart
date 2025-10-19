import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ShoppingCart.css';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "T-Shirt - Blue, Large",
      price: 25.00,
      quantity: 1,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyCQWXoQoxummR9zfbneR6l7C0Anth0Sz3SML2HUPCXwc8lxEXlABmwnGP-LwK5cBojSBslRb68_avJCS7fbKTrkjFY0rvDXt5ogD1e9jZlxjhVon4e9Z4HumTGeonuuhjAo11s3GsfFVtvI5i2cop2Hb548CUrzeysnYAzwcbTc-zvptHBN9xRd6cOH33cgAJF-P5mDv2L-6mRYDxKuXpCtOLbk4sj51WEHd8pUTuQTr1mAYBQib2KQoa8H-E6kjJDyn4PG7dmAgU",
      alt: "A blue t-shirt with a minimalist design.",
      inStock: true
    },
    {
      id: 2,
      name: "Classic Leather Wallet",
      price: 45.00,
      quantity: 1,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGvWhS4aGXH62ZwJB3Nc7pqNYEznCUagg7SC_pqgnHxBBJKANhStFqd2D6KegifK_xuuRr4r5phIH7UDMxKv2CxMvrnWwp49wBAlvJzTTCK91b3znIjBsGJxLyPQ1dqL029GhQ9LYRw0L8XChwxme2FJZ6iPm9bcDa0Dp1kj8BFRQr4rHXmhMUFWXnG47EKpTmOPESFNY8nlcXoVASRVNYulMtugMlAp5kmDAkbxF9Tz9-_qJU-HrHgRG8z4GYivgWbkOwoiLs0xGq",
      alt: "A classic brown leather wallet, open to show its compartments.",
      inStock: true
    }
  ]);

  const [promoCode, setPromoCode] = useState('');
  const navigate = useNavigate();

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const subtotal = calculateSubtotal();

  // Add a helper function to format currency with thousand separators
  const formatBDT = (amount) => {
    // Format the number with commas as thousand separators and 2 decimal places
    return amount.toLocaleString('en-BD', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const handleContinueShopping = () => {
    navigate('/');
  };

  return (
    <div className="shopping-cart-page">
      <div className="container">
        <div className="cart-layout">
          {/* Cart Items Section */}
          <div className="cart-items-section">
            <div className="cart-header">
              <div className="header-text">
                <h1>My Bag</h1>
                <p>Review your items and proceed to checkout.</p>
              </div>
              <button className="continue-shopping" onClick={handleContinueShopping}>
                Continue Shopping
              </button>
            </div>

            {cartItems.length === 0 ? (
              <div className="empty-cart">
                <span className="material-symbols-outlined">shopping_bag</span>
                <h3>Your cart is empty</h3>
                <p>Looks like you haven't added anything to your cart yet.</p>
                <button className="btn btn-primary" onClick={handleContinueShopping}>
                  Start Shopping
                </button>
              </div>
            ) : (
              <div className="cart-items">
                {cartItems.map((item) => (
                  <CartItem 
                    key={item.id}
                    item={item}
                    onUpdateQuantity={updateQuantity}
                    onRemove={removeItem}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Order Summary Section */}
          <div className="order-summary-section">
            <div className="order-summary-card">
              <h3>Order Summary</h3>
              
              <div className="summary-details">
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>৳{formatBDT(subtotal)}</span>
                </div>
                <div className="summary-row">
                  <span>Shipping & Taxes</span>
                  <span className="calculated">Calculated at checkout</span>
                </div>
              </div>

              <div className="promo-section">
                <input
                  type="text"
                  placeholder="Enter promo code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
                <button className="apply-btn">Apply</button>
              </div>

              <div className="total-section">
                <div className="total-row">
                  <span>Total</span>
                  <span className="total-amount">৳{formatBDT(subtotal)}</span>
                </div>
              </div>

              <button className="checkout-btn" onClick={handleCheckout}>
                Proceed to Checkout
              </button>

              <div className="secure-checkout">
                <span className="material-symbols-outlined">lock</span>
                <span>Secure Checkout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Cart Item Component
const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  // Add a helper function to format currency with thousand separators
  const formatBDT = (amount) => {
    // Format the number with commas as thousand separators and 2 decimal places
    return amount.toLocaleString('en-BD', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  return (
    <div className="cart-item">
      <div className="item-content">
        <div className="item-image">
          <img
            src={item.image}
            alt={item.alt}
          />
        </div>
        <div className="item-details">
          <h4 className="item-name">{item.name}</h4>
          <p className={`stock-status ${item.inStock ? 'in-stock' : 'out-of-stock'}`}>
            {item.inStock ? 'In Stock' : 'Out of Stock'}
          </p>
          <p className="item-price">৳{formatBDT(item.price)}</p>
        </div>
      </div>
      
      <div className="item-controls">
        <div className="quantity-controls">
          <button 
            className="quantity-btn"
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          >
            <span className="material-symbols-outlined">remove</span>
          </button>
          <input
            type="number"
            className="quantity-input"
            value={item.quantity}
            onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value) || 1)}
            min="1"
          />
          <button 
            className="quantity-btn"
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          >
            <span className="material-symbols-outlined">add</span>
          </button>
        </div>
        
        <button 
          className="remove-btn"
          onClick={() => onRemove(item.id)}
        >
          <span className="material-symbols-outlined">delete</span>
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;