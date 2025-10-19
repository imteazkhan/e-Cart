import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    useBillingAddress: true
  });

  const orderItems = [
    {
      id: 1,
      name: "Performance Running Shoes",
      price: 99.99,
      quantity: 1,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDt0VqdCod61Zq7OYou3IRWmCiIpvAnaPej6ZP4Z92OM4e1Fu324NrD9LdnG1p9hpkY9hs8e8YJbcy39CkQ1JnE1ygGOifdfi_QpVc_Mz5rTmytvd9bzj3RWw2z26gZA5qfPEblp23rn4lIAbYXmZVcxncpNUCeVwF41h-UwcCg0l91MeEdcOO1APky5Tj86u4guH-OBNtKX2-FrJyh20JkYVtYU8wR2lqRbJjVtdVY4hQR5ZTzxwEyZGEAtVJ3IVcOpfx-Ppkv1Pc_",
      alt: "Red sports shoe"
    },
    {
      id: 2,
      name: "Vintage Camera",
      price: 149.50,
      quantity: 1,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdZWyM0OqZIFOGygEyjHjfTeW3Xz-UvXpx1k5xHajumG70LrJoYmB_v7wnLxYHWZSlzQFIZuzUpKPrVGgUCsW7eoR7YlGJHDxYnI12SQRxFxx3O456jQXv54kux2-pODAbMg3NnriLxVQ5hClPb9Q95g_qFo6mNbU2oO2AgVcIi5CTF2fahWNSq1BFDToHHJskSVTkxJWYBZHJ6Z8r3uisRPDSz_uWarFy3EnIpV9tG6P_FcMgSN_j6lqnL7QQU2p7ZtCvVBIpRnj9",
      alt: "Vintage camera"
    }
  ];

  const orderSummary = {
    subtotal: 249.49,
    shipping: 5.00,
    taxes: 20.45,
    total: 274.94
  };

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Process checkout logic here
  };

  // Add a helper function to format currency with thousand separators
  const formatBDT = (amount) => {
    // Format the number with commas as thousand separators and 2 decimal places
    return amount.toLocaleString('en-BD', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  const handleBackToCart = () => {
    navigate('/ShoppingCart');
  };

  return (
    <div className="checkout-page">
      <div className="container">
        <div className="checkout-layout">
          {/* Checkout Form Section */}
          <div className="checkout-form-section">
            <div className="checkout-header">
              <h1>Checkout</h1>
            </div>

            {/* Progress Bar */}
            <div className="checkout-progress">
              <div className="progress-steps">
                <span className="step active">Shipping</span>
                <span className="step">Payment</span>
                <span className="step">Review</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '33%' }}></div>
              </div>
            </div>

            {/* Shipping Information Form */}
            <form onSubmit={handleSubmit} className="shipping-form">
              <div className="form-section">
                <h2>Shipping Information</h2>
                
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group full-width">
                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      placeholder="Enter your address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      placeholder="Enter your city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="state">State</label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      placeholder="Enter your state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="zipCode">Zip Code</label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      placeholder="Enter zip code"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group full-width">
                    <div className="checkbox-group">
                      <input
                        type="checkbox"
                        id="billing-address"
                        name="useBillingAddress"
                        checked={formData.useBillingAddress}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="billing-address">
                        Use shipping address as billing address
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="checkout-navigation">
                <button type="button" className="back-link" onClick={handleBackToCart}>
                  <span className="material-symbols-outlined">arrow_back</span>
                  Back to cart
                </button>
                <button type="submit" className="continue-btn">
                  Continue to Payment
                </button>
              </div>
            </form>
          </div>

          {/* Order Summary Section */}
          <div className="checkout-summary-section">
            <div className="order-summary-card">
              <h3>Order Summary</h3>
              
              <div className="order-items">
                {orderItems.map((item) => (
                  <div key={item.id} className="order-item">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="item-image"
                    />
                    <div className="item-details">
                      <h4 className="item-name">{item.name}</h4>
                      <p className="item-quantity">Qty: {item.quantity}</p>
                    </div>
                    <span className="item-price">৳{formatBDT(item.price)}</span>
                  </div>
                ))}
              </div>

              <div className="summary-divider"></div>

              <div className="price-breakdown">
                <div className="price-row">
                  <span>Subtotal</span>
                  <span>৳{formatBDT(orderSummary.subtotal)}</span>
                </div>
                <div className="price-row">
                  <span>Shipping</span>
                  <span>৳{formatBDT(orderSummary.shipping)}</span>
                </div>
                <div className="price-row">
                  <span>Taxes</span>
                  <span>৳{formatBDT(orderSummary.taxes)}</span>
                </div>
              </div>

              <div className="summary-divider"></div>

              <div className="total-section">
                <span>Total</span>
                <span className="total-price">৳{formatBDT(orderSummary.total)}</span>
              </div>

              <div className="secure-badge">
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

export default Checkout;