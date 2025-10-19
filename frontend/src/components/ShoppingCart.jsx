import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import './ShoppingCart.css';

const ShoppingCart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const navigate = useNavigate();

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
                    onRemove={removeFromCart}
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
            alt={item.alt || item.name}
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