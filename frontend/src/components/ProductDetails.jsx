import React, { useState } from 'react';
import './ProductDetails.css';

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  // Add a helper function to format currency with thousand separators
  const formatBDT = (amount) => {
    // Format the number with commas as thousand separators and 2 decimal places
    return amount.toLocaleString('en-BD', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  const productImages = [
    {
      id: 1,
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuASYG_4qGhgPwlRduygI9Z2Go10kftHPkqN5gDez3a_xan_NYcZoS8zUv2zos1s9dLFGCzqzMhzHeuUShoAoeZLWNp3a-7f95TkH6HqhYJqgGYD0trJ0f2prdhNLmniPLYvFNXcjWxsO_lbhhzrf3N5Gq9vBkjqMvxP0T_N4Ku0228HG1GEr1v7CvEEyHscjnyJwKsKlkDJ4PlIFHc9ncCyKvdNw5jQsCBoSBcwOOuAX0O-sjFrcJXx_cLEz1xM0U19wN5y3fl0L8wI",
      alt: "Main product image of wireless headphones",
      active: true
    },
    {
      id: 2,
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAO78BYnnYUKR9UN7bOQw6G4iKJWeKWwisqFElYRAVQAVbjDl0o3J8siTnNjA4xormtyydhsF4YPY96XMYWu-qNE0LYl-YFzN6t47x56hkBguyybMonPg6k1VHgq_meIxABgLJr7zL3EG78pLBnCovJieE24vSuBBmjkJl8KuXXT1iuFnVqvIitv9N7ncBs7-bnYurIc47PiCPZEpzyXPUekKfKgJWxRKlfX1JO1Sfn3wDKFxVqQ-wScX7xzG4D4UDWwJWdGMv7QoD2",
      alt: "Thumbnail of headphones from the side",
      active: false
    },
    {
      id: 3,
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoWeYwAsbONnl_8ppvmCETb7HLEDS9zkKokHlZ4SdTUwZ-s9eKpA9j0DbLKqYu58bkjaLbzUKKBmx38F8N5P0H6MgVfhPtPoAkJsFtizoLymD1eQBXn6COJejrDGVabB3r81A0bvf7DRV4nuOFGGngTYtkSNRhYdzYZSL89iYqeSp22RKrvitZL5tJFyhFz3fvz1rNcYjRCzP-s6Njx5M9KDOUxMqzMEDx2kymt0W8OqusdhvsjEktSSynzEhWawU6VIQIgUZbuGrk",
      alt: "Thumbnail of headphones folded",
      active: false
    },
    {
      id: 4,
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRUxo7eSrTybzKSSKWAqQX4naYpNRf_Q1QjKJi3jhnfbcN19ZGPVMe5sxbM8roTV5YxZH2WZaBfEjPQpzE4OnXgaU0MYL8S5hXg2O13Ze1w2_flPen-5OK7hOAdvaydesX9nGw-F6_aRhg2nOWb01zWkifABjX8d9TP9aVQAMOWlyyXPZu4j2S8fwX5TAlweGTIwKLjhtILH2SJfr6AVr2h7sp9vjJFMACIx0L61GiNgCe4qCYNI8O6aIc_NYqzohiMN2dy7VWIrKr",
      alt: "Thumbnail showing headphone details",
      active: false
    },
    {
      id: 5,
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQ5hWigfETOyPw8ePsdCRmBeXtOpo5HU4B_ZiZmZxmNhMRwTatc9bMyFhjus9Y0T1qhuIJv5m-T1SdGjpbdLF6QHHDqMDwcdhd-XILVjYm_RKZ4B2c7jX3mYHb9g6FI5kK6sFWhi3hL9yNwtK4wZmN1OwPIKpuldHoJCx8qEA6ylB4MRCVrFZ-3-VlJXyCMS311HmdNt1Sv_-Qn-4w3ZRg5V_bhTEV5ilIoMrkygA-PB7V39yPqC6i1ioYe9kKDTpdPaRnMqoC3FHR",
      alt: "Thumbnail of headphones in its case",
      active: false
    }
  ];

  const relatedProducts = [
    {
      id: 1,
      name: "Aura Smartwatch",
      price: "৳" + formatBDT(199.99),
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHsRPx57DR5Atx0PrAIn5iKLYZtgUs61iMPAlJB0A_BhQedRCXGJPoijQJviLF5sOiJ2C6dzRFeXSZwSS1utFbFKajygA7CVmPy1L8hm38DrDbIKyAKeXVT_wizm-KiN8f1yh9HSB0ENWiaw90-amW5zDA5q8Ma0xwCiaujACCiZmn8hd6y55HYngKTcMbi-_c4smb8-H33edQ4gzUvUczih52o2uuK3BtW3_RIcunk_Wx8pcJaMGQREHjwVk6nX_ShKAWegu9lKNQ",
      alt: "Smartwatch"
    },
    {
      id: 2,
      name: "AuraWave Portable Speaker",
      price: "৳" + formatBDT(89.99),
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-cyrHd_lTF6shFokpgpVOemMKqOQdy0WvJhP_cE6jFuD4VRMvza984fI4IvUmf3Q2OfToXStSW3lGsPGWGOmwVxfFmdemSHXAcal0QEr7NIes63S3Ssl6K5e8QL6wHkJWtr1eq2Ofk0FHzMU1N9nqeZqnocgaI0Jd4UK3n22uqRA7kVvEJw_6yVFpulC6e6UA5jrFyqUOlLUSdlhW92Tx9037m6MwpXnyqIraWNtRwFfj9FiqWM_X2V-fCL_MwNWUOkzd7QJddDkc",
      alt: "Portable Speaker"
    },
    {
      id: 3,
      name: "Aura Buds Mini",
      price: "৳" + formatBDT(79.99),
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDb9Bxdc9cV_wBai0GphLqsIQ_EY9KMFA9IZKRaZgGiZENKyyhm2VJ4hGa3gIf9P5Y45B2cfOtFRkivPWcal3WAVlHlvn8P0ivBqWEP1Vm6za1TNk1MYpkYKXl-BsZkDH_MkJEiwLcFRyjXq4leMC8bHyIEwbMHsTXn7gS0U_bPjOH9VwM-mnYgSHhEkWIxSZHRW4njptSeA-q88temuz--vof2H9rNYDXnkGHQ9aLtNJQ2sQslW3xwtPeAUm-eovJEYNiE40e7X6kx",
      alt: "Wireless earbuds"
    },
    {
      id: 4,
      name: "AuraCharge Station",
      price: "৳" + formatBDT(49.99),
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZT_dD4arMtGGEuB4OMb5WR41I7a_Sk59icwiK9v0F2HiIfaTsuUSVbGG_wXonVKvq7S3WJfMmh0Oy-uLC4qdqMQPYfUjFHJcJdJu662QQ6QgQ0UqqauUn5w_nfglgIf91fjzqPFNjwJdn9axp_cojvkdDLo5qHUUITerKNwX-uEhjQLgLPIsrbi7qmwwL92WRzfq6kVKXVuX_eR5Uo9q_Og9NTzh0gxMn7t959f4ElT8vUauKTpyNhBPhWUwKoLN1B6ryg1O3-YtB",
      alt: "Charging station"
    }
  ];

  const reviews = [
    {
      id: 1,
      rating: 5,
      title: "Amazing Sound Quality!",
      content: "These are the best headphones I've ever owned. The noise cancellation is incredible, and they are so comfortable to wear for hours.",
      date: "March 15, 2024"
    },
    {
      id: 2,
      rating: 4,
      title: "Great Value",
      content: "For the price, you can't beat these. The battery life is impressive. A bit tight on my head, but maybe they just need breaking in.",
      date: "March 12, 2024"
    }
  ];

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

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
          <a href="#">Electronics</a>
          <span className="divider">/</span>
          <span className="current">Wireless Headphones</span>
        </nav>

        {/* Product Section */}
        <div className="product-section">
          {/* Product Images */}
          <div className="product-images">
            <div className="main-image">
              <img
                src={productImages[0].src}
                alt={productImages[0].alt}
              />
            </div>
            <div className="image-thumbnails">
              {productImages.slice(1).map((image) => (
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
            <h1 className="product-title">AuraWave Pro Headphones</h1>
            <p className="product-description">
              Immersive sound experience with cutting-edge noise cancellation.
            </p>
            
            <div className="price-section">
              <span className="current-price">৳{formatBDT(249.99)}</span>
              <span className="original-price">৳{formatBDT(299.99)}</span>
            </div>

            {/* Rating */}
            <div className="rating-section">
              <div className="stars">
                {renderStars(4.5)}
              </div>
              <span className="rating-text">(1,258 reviews)</span>
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
              <button className="add-to-cart-btn">
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
                    Experience audio like never before with the AuraWave Pro Headphones. Engineered for audiophiles and casual listeners alike, these headphones deliver crystal-clear highs, rich mids, and deep, powerful bass. The active noise cancellation technology silences distractions, allowing you to fully immerse yourself in your music, podcasts, or calls. Crafted with premium, lightweight materials, the AuraWave Pro ensures all-day comfort, while the long-lasting battery keeps the music going for up to 30 hours on a single charge.
                  </p>
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
                <span className="average-rating">4.7</span>
                <div className="rating-details">
                  <div className="stars">
                    {renderStars(4.5)}
                  </div>
                  <p>Based on 1,258 reviews</p>
                </div>
              </div>
            </div>

            <div className="reviews-list">
              {reviews.map((review) => (
                <div key={review.id} className="review-item">
                  <div className="review-header">
                    <div className="stars">
                      {renderStars(review.rating)}
                    </div>
                    <span className="review-date">{review.date}</span>
                  </div>
                  <h4 className="review-title">{review.title}</h4>
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
            {relatedProducts.map((product) => (
              <RelatedProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

// Related Product Card Component
const RelatedProductCard = ({ product }) => {
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
        <p className="price">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductDetails;