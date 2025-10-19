import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { getAllProducts } from '../data/products';
import './ECommerceProductListing.css';

const ECommerceProductListing = () => {
  const navigate = useNavigate();
  const [priceRange, setPriceRange] = useState({ min: 50, max: 500 });
  const [selectedCategories, setSelectedCategories] = useState(['T-Shirts']);

  // Add a helper function to format currency with thousand separators
  const formatBDT = (amount) => {
    // Format the number with commas as thousand separators and 2 decimal places
    return amount.toLocaleString('en-BD', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  // Get all products
  const products = getAllProducts();

  const categories = [
    "T-Shirts",
    "Shirts",
    "Jeans",
    "Trousers",
    "Jackets"
  ];

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div className="product-listing-page">
      <div className="container">
        <div className="product-layout">
          {/* Sidebar Filters */}
          <aside className="filters-sidebar">
            <div className="sticky-filters">
              <div className="filter-card">
                <div className="filter-header">
                  <h5>Categories</h5>
                </div>
                <div className="filter-options">
                  {categories.map((category) => (
                    <div key={category} className="filter-option">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                        id={`category-${category}`}
                      />
                      <label htmlFor={`category-${category}`}>
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="filter-card">
                <div className="filter-header">
                  <h5>Price Range</h5>
                </div>
                <div className="price-filter">
                  <div className="range-slider">
                    <input
                      type="range"
                      min="50"
                      max="500"
                      value={priceRange.min}
                      onChange={(e) => setPriceRange({ ...priceRange, min: parseInt(e.target.value) })}
                    />
                    <input
                      type="range"
                      min="50"
                      max="500"
                      value={priceRange.max}
                      onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) })}
                    />
                  </div>
                  <div className="price-labels">
                    <span>৳{formatBDT(priceRange.min)}</span>
                    <span>৳{formatBDT(priceRange.max)}</span>
                  </div>
                </div>
              </div>

              <div className="filter-card">
                <div className="filter-header">
                  <h5>Sort By</h5>
                </div>
                <select className="sort-select">
                  <option>Relevance</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>New Arrivals</option>
                </select>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="product-grid-section">
            {/* Page Header */}
            <div className="page-header">
              <div className="header-content">
                <div className="header-text">
                  <h1>Men's T-Shirts</h1>
                  <p>Browse our latest collection of high-quality men's t-shirts.</p>
                </div>
                <div className="header-meta">
                  <span>Showing 1-12 of 86 results</span>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="products-grid">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
              
              {/* Loading Skeleton */}
              <div className="product-card skeleton">
                <div className="skeleton-image"></div>
                <div className="skeleton-content">
                  <div className="skeleton-line short"></div>
                  <div className="skeleton-line medium"></div>
                </div>
                <div className="skeleton-button"></div>
              </div>
            </div>

            {/* Pagination */}
            <div className="pagination">
              <div className="pagination-content">
                <button className="pagination-btn prev">
                  <span className="material-symbols-outlined">arrow_back</span>
                  Previous
                </button>
                
                <div className="pagination-pages">
                  <button className="page-btn active">1</button>
                  <button className="page-btn">2</button>
                  <button className="page-btn">3</button>
                  <span className="page-dots">...</span>
                  <button className="page-btn">8</button>
                </div>
                
                <button className="pagination-btn next">
                  Next
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Product Card Component
const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart({
      ...product,
      inStock: true
    });
  };
  
  return (
    <div className="product-card" onClick={() => navigate(`/product-details/${product.id}`)}>
      <a href="#" className="product-link">
        <div className="product-image-container">
          <img
            src={product.image}
            alt={product.alt}
            className="product-image"
          />
        </div>
      </a>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">৳{product.price.toLocaleString('en-BD', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })}</p>
      </div>
      <div className="product-actions">
        <button className="btn btn-primary add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ECommerceProductListing;