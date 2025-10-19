import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { getProductById } from '../data/products';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  // Get product data by ID
  const product = getProductById(id);
  
  // Handle case where product is not found
  if (!product) {
    return (
      <div className="product-details-page">
        <div className="container">
          <div className="product-not-found">
            <h2>Product Not Found</h2>
            <p>The product you're looking for doesn't exist or is no longer available.</p>
          </div>
        </div>
      </div>
    );
  }

  // Add a helper function to format currency with thousand separators
  const formatBDT = (amount) => {
    // Format the number with commas as thousand separators and 2 decimal places
    return amount.toLocaleString('en-BD', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity: quantity,
      inStock: true
    });
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<span key={i} className="material-symbols-outlined star filled">star</span>);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(<span key={i} className="material-symbols-outlined star half">star_half</span>);
      } else {
        stars.push(<span key={i} className="material-symbols-outlined star">star</span>);
      }
    }
    return stars;
  };

  return (
    <div className="product-details-page">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <a href="#">Home</a>
          <span className="divider">/</span>
          <a href="#">{product.category}</a>
          <span className="divider">/</span>
          <span className="current">{product.name}</span>
        </nav>

        {/* Product Section */}
        <div className="product-section">
          {/* Product Images */}
          <div className="product-images">
            <div className="main-image">
              <img
                src={product.images[0].src}
                alt={product.images[0].alt}
              />
            </div>
            <div className="image-thumbnails">
              {product.images.slice(1).map((image) => (
                <div key={image.id} className={`thumbnail ${image.active ? 'active' : ''}`}>
                  <img
                    src={image.src}
                    alt={image.alt}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="product-info">
            <h1 className="product-title">{product.name}</h1>
            <p className="product-description">
              {product.description}
            </p>
            
            <div className="price-section">
              <span className="current-price">৳{formatBDT(product.price)}</span>
              <span className="original-price">৳{formatBDT(product.price * 1.2)}</span>
            </div>

            {/* Rating */}
            <div className="rating-section">
              <div className="stars">
                {renderStars(product.rating)}
              </div>
              <span className="rating-text">({product.reviewCount} reviews)</span>
            </div>

            <div className="stock-status">
              <span className="material-symbols-outlined">check_circle</span>
              In Stock
            </div>

            {/* Quantity and Add to Cart */}
            <div className="purchase-section">
              <div className="quantity-selector">
                <button className="quantity-btn" onClick={decreaseQuantity}>
                  <span className="material-symbols-outlined">remove</span>
                </button>
                <input 
                  type="text" 
                  className="quantity-input"
                  value={quantity}
                  readOnly
                />
                <button className="quantity-btn" onClick={increaseQuantity}>
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>
              <button className="add-to-cart-btn" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>

            {/* Product Details Tabs */}
            <div className="product-tabs">
              <div className="tab-headers">
                <button 
                  className={`tab-header ${activeTab === 'description' ? 'active' : ''}`}
                  onClick={() => setActiveTab('description')}
                >
                  Description
                </button>
                <button 
                  className={`tab-header ${activeTab === 'specifications' ? 'active' : ''}`}
                  onClick={() => setActiveTab('specifications')}
                >
                  Specifications
                </button>
                <button 
                  className={`tab-header ${activeTab === 'shipping' ? 'active' : ''}`}
                  onClick={() => setActiveTab('shipping')}
                >
                  Shipping & Returns
                </button>
              </div>
              <div className="tab-content">
                {activeTab === 'description' && (
                  <p>
                    {product.description}
                  </p>
                )}
                {activeTab === 'specifications' && (
                  <ul className="specifications-list">
                    {product.specifications && product.specifications.map((spec, index) => (
                      <li key={index}>{spec}</li>
                    ))}
                  </ul>
                )}
                {activeTab === 'shipping' && (
                  <div className="shipping-info">
                    <p>Free shipping on orders over ৳1000.</p>
                    <p>Standard delivery: 3-5 business days.</p>
                    <p>Express delivery: 1-2 business days.</p>
                    <p>Returns accepted within 30 days.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Customer Reviews */}
        <section className="reviews-section">
          <h2>Customer Reviews</h2>
          <div className="reviews-card">
            <div className="reviews-header">
              <div className="rating-overview">
                <span className="average-rating">{product.rating}</span>
                <div className="rating-details">
                  <div className="stars">
                    {renderStars(product.rating)}
                  </div>
                  <p>Based on {product.reviewCount} reviews</p>
                </div>
              </div>
            </div>

            <div className="reviews-list">
              {product.reviews && product.reviews.map((review) => (
                <div key={review.id} className="review-item">
                  <div className="review-header">
                    <div className="stars">
                      {renderStars(review.rating)}
                    </div>
                    <span className="review-date">{review.date}</span>
                  </div>
                  <h4 className="review-title">{review.title}</h4>
                  <p className="review-author">by {review.author}</p>
                  <p className="review-content">{review.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="related-products">
          <h2>You Might Also Like</h2>
          <div className="related-products-grid">
            {product.relatedProducts && product.relatedProducts.map((relatedProduct) => (
              <RelatedProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

// Related Product Card Component
const RelatedProductCard = ({ product }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    addToCart({
      ...product,
      inStock: true
    });
  };
  
  // Add a helper function to format currency with thousand separators
  const formatBDT = (amount) => {
    // Format the number with commas as thousand separators and 2 decimal places
    return amount.toLocaleString('en-BD', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };
  
  return (
    <div className="related-product-card">
      <div className="product-image">
        <img
          src={product.image}
          alt={product.alt}
        />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="price">৳{formatBDT(product.price)}</p>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;