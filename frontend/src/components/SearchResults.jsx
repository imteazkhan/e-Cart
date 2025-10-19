import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './SearchResults.css';

const SearchResults = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);

  // Extract search query from URL
  useEffect(() => {
    const query = new URLSearchParams(location.search).get('q') || '';
    setSearchQuery(query);
    
    // Simulate API call to search products
    if (query) {
      performSearch(query);
    } else {
      setSearchResults([]);
      setLoading(false);
    }
  }, [location.search]);

  // Simulate search API call
  const performSearch = (query) => {
    setLoading(true);
    
    // In a real app, this would be an API call to the backend
    // For now, we'll simulate with sample data
    setTimeout(() => {
      // Sample product data - in a real app this would come from an API
      const sampleProducts = [
        {
          id: 1,
          name: "Modern T-Shirt",
          price: 29.99,
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAvIsyoJo7e50xzP376QgnsKWrrfvyRLksiQb5vpyQ1hLqinlOPENMgVMaZ5Y_kyQkNf0EsqmWe93Y4WqN0VxPFLxHVUGrmfVSh-DHDf1E1WxLsXyHOoDJ-UFL7DCit6dLl1OUfMyhT0fVUah-jedRtqY28z_DV-hDdPInp9NgP5JvuyCROiDfL8rhZKdOt0DLi_Nkx3kYhvwxpjrnKgpOnggX4ACksN1Ta3s3FLG5LvK7BNuJWmwRhYbeGwwWHWw2ihYgT9sEIZc0",
          alt: "Modern T-Shirt"
        },
        {
          id: 2,
          name: "Stylish Sneakers",
          price: 89.99,
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwGsOkqpHy-jwvAf9CoqAlDmaCJNARVwzHpcaesiQUwPk-QnfamaPBzw07ImIYOYQGYxJYFq--7-KI5rNMNb5P2YUyDdvpnG6iBBh8XUA6KDNoJFXUQSpMGcugVE1JDXCs-zW_ZWFesmbVNhHSqaGyh0bGwaESSfhKEy3fxr1Wpb3MfC7CO3WmqYSk1d4KXeZF8u2sFeUnjSoy-X15_SWwE_Ag7R17k-3MOeSz8IkO4Wmxpbd61vW5HqdhIsimWoUATc39xlEddUMu",
          alt: "Stylish Sneakers"
        },
        {
          id: 3,
          name: "Sleek Watch",
          price: 149.99,
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBiPvxSUOryHN6dU4xEH_bRF3dfv0Nk9Y4Qc8_3OyJeMt0qm2ETvsiycu528XZ0B181C81ACecaciOq80Plb-iTA-3kP9o4PSE4LN6UggdSjflDEt_5yq1sPptsA1cRNTgMy24ZXfS69jpS9kAa_idvWlSPE37fdeYFNz0aTBkE8sZUj0nDY84aqxEMB2B10H6O_Kc4ip0VdGEghHS90yDHbrWdrcCfw9tH6Cn8nSDKIiQ0sYRl19tBi9zEUsmaEOFGVzszeLFnpKil",
          alt: "Sleek Watch"
        },
        {
          id: 4,
          name: "Versatile Backpack",
          price: 49.99,
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDX30Z8FO-hQNrHxxbuYFZvW0DIuHGnKHGMXYrHpAP5Pq7Dv2m51GWHS8XyAJzNtnPB0PV5jn5FCwxQ5s4IlG8bV5qgLG63nHgHTx-H2_CbmwMrm65ewJ9mK9xMxC9Bfj4kYEj3AGSsAV0YW85gxDy5eXCzcwqspUM_k2pfRnryviIX2rhVjMLjwgZZHylncVJS8rVOuQJaQR55p39fDA0LZe_FkJk4Wxy_XW_fkTM2dngSJ_CBRr6J-qCR4OsPF6J460frJsrObAoc",
          alt: "Versatile Backpack"
        },
        {
          id: 5,
          name: "Wireless Headphones",
          price: 79.99,
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuASYG_4qGhgPwlRduygI9Z2Go10kftHPkqN5gDez3a_xan_NYcZoS8zUv2zos1s9dLFGCzqzMhzHeuUShoAoeZLWNp3a-7f95TkH6HqhYJqgGYD0trJ0f2prdhNLmniPLYvFNXcjWxsO_lbhhzrf3N5Gq9vBkjqMvxP0T_N4Ku0228HG1GEr1v7CvEEyHscjnyJwKsKlkDJ4PlIFHc9ncCyKvdNw5jQsCBoSBcwOOuAX0O-sjFrcJXx_cLEz1xM0U19wN5y3fl0L8wI",
          alt: "Wireless Headphones"
        }
      ];

      // Filter products based on search query (simple text matching)
      const filteredProducts = sampleProducts.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase())
      );

      setSearchResults(filteredProducts);
      setLoading(false);
    }, 500); // Simulate network delay
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className="search-results-page">
      <div className="container">
        <div className="search-header">
          <h1>Search Results</h1>
          <form className="search-form" onSubmit={handleSearch}>
            <div className="search-input-container">
              <span className="material-symbols-outlined">search</span>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button type="submit" className="search-btn">Search</button>
          </form>
        </div>

        {loading ? (
          <div className="loading">Searching...</div>
        ) : (
          <>
            <div className="search-info">
              <p>Found {searchResults.length} results for "{searchQuery}"</p>
            </div>

            {searchResults.length > 0 ? (
              <div className="search-results-grid">
                {searchResults.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="no-results">
                <span className="material-symbols-outlined">search_off</span>
                <h3>No products found</h3>
                <p>Try different search terms</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

// Product Card Component
const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  
  return (
    <div className="product-card" onClick={() => navigate('/product-details')}>
      <div className="product-image">
        <img src={product.image} alt={product.alt} />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">৳{product.price.toLocaleString('en-BD', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })}</p>
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  );
};

export default SearchResults;