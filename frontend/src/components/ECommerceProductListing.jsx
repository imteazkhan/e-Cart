import React, { useState } from 'react';
import './ECommerceProductListing.css';

const ECommerceProductListing = () => {
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

  const products = [
    {
      id: 1,
      name: "Classic Crewneck T-Shirt",
      price: "৳" + formatBDT(29.99),
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7ZOBCm3G27ZTZMASiG0YKtbsD7AX26XlDveE9FihEMWXmhmPFee2pQdmmpvi8OkkYDxQoSukG4J7tupQYFFU0CRTLkPe6AuuUi5UzGp7hwBlh2EJB_WDx_ru3eewIqMDcqOSe-ULQFNyOwpMq2KbvDyEfOZM-XsamY9bZ5l6KxeU5vgguWz3g4wnhW0qrXycEH3we2_63BOAmrLDz3APxBW8QEIE67GTvaaIPM5NxNs21NBN7pCnnSz__xOGNI8TjIzBjfxool4R5",
      alt: "A man wearing a plain white t-shirt"
    },
    {
      id: 2,
      name: "Vintage Graphic Tee",
      price: "৳" + formatBDT(34.99),
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3ECw_HKbsPc5C3Pv7HBF0KkymgriEZTWnr7F-J6XQMaRtqjUplU6ZK-B-ZZ_0IF-iTuD6a7mQHQcyaK3Mcku856W7UqXVVSBPMWK7_3WqD_CtTlx2t6D1M07OAOkr6-ddC4gi7jiL3rva3JF3T-vVFcSKm05IGAL67RiKSNQN_rn-UKduJKV3afXWqKcxvPP-jW0ySsSXNNk81hml0g64NAK15SG0Atig_LQ-WGCbSZ7shdOHh24aWSZcS9FixkefZPb_JCNTs2do",
      alt: "A man wearing a grey t-shirt"
    },
    {
      id: 3,
      name: "Essential V-Neck T-Shirt",
      price: "৳" + formatBDT(24.99),
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAw6-iKolXX8ybymadO6DmrmNrP-t2iDA053XjaTUxGe4uJ_dXECWKq3hsvs7gsINUJVO9kZEzIjJ5HQdaJo4Kp82N9jVKgogYkF5IRdBsmtmK4d5kwHUy74FgAYJfVoLu97FMPhRwj3ffkE-APldFtS2VujeCmk64JN7lHQ8mtBa6vdP-KQajJZln45kOM2wXNgoCQk3DfqALN_wSEnM6l4uyapQIFl6Nokr10sXqrXE0kfwjjOATnvRmc9BCH-289_ay-aaDHH30F",
      alt: "A black t-shirt on a hanger"
    },
    {
      id: 4,
      name: "Striped Pocket Tee",
      price: "৳" + formatBDT(32.00),
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCI8-sI2lB8MQf1OtTstnu6dnUaFGj4oYDnY71GhVccz8VKxPLzmbvjZfrAw7_K6nKv_kQLAUIuLeTokVZd5J3Ebc0fKNzEoEtIVc_EHEOoZu8RbN432731gZ_poWl6tgbCA79b0ZrJRiBlYGrmDTqKjD-i9_d0RK7qjFLH0e-fEVnR7Qb91JVPxuKl9ADDUmGfDO24zbfukTGtBChMHdJu4S7DQT6jPtb4eLPPDJ943v7QRwfy_pY2XGYbRajMnPXUXnnieOV0af-G",
      alt: "A man in a striped t-shirt"
    },
    {
      id: 5,
      name: "Long-Sleeve Henley",
      price: "৳" + formatBDT(45.00),
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyRh2bu9cIXNzBKJxtLaGdHy7S6yLL2W-Akvt4r-lLnCl6S505eJHRwyoGEsBwcYCunepaixoMxZBU3UrpxbL71kLieZgR1oSQkaNUHibZz-6r2X0JvEwUwTK9OzSqZqfsJFSCEvVKnyo0DYdTFMjzKl_m7uqu-Z8yD7p42OnSB_lgS03Uvl6BkHZoZRgdBP45Ji26sXZ9Jqxv5-WHyiG1bokgN569cVsFGmAU2L91DRCT-tB1-NOxLMThvkVAZ1Hm-EEkuoTAt8bz",
      alt: "A plain white t-shirt on a hanger"
    }
  ];

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
  return (
    <div className="product-card">
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
        <p className="product-price">{product.price}</p>
      </div>
      <div className="product-actions">
        <button className="btn btn-primary add-to-cart">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ECommerceProductListing;