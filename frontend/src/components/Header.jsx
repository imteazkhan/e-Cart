import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const { getCartCount } = useCart();
  const { isAuthenticated, user, logout, isAdmin } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  // Update cart count when cart changes
  useEffect(() => {
    setCartCount(getCartCount());
  }, [getCartCount]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results page with query parameter
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.main-nav') && !event.target.closest('.menu-toggle')) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Header */}
      <header className="ecommerce-header">
        <div className="container">
          <div className="header-content">
            <div className="header-left">
              <div className="logo" onClick={() => navigate('/')}>
                <svg className="logo-icon" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
                </svg>
                <h2>E-Cart</h2>
              </div>
              <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
                <a href="#" onClick={(e) => { e.preventDefault(); navigate('/products'); }}>Shop</a>
                <a href="#" onClick={(e) => { e.preventDefault(); navigate('/products'); }}>New Arrivals</a>
                <a href="#" onClick={(e) => { e.preventDefault(); navigate('/ECommerceCategories'); }}>Categories</a>
              </nav>
            </div>
            <div className="header-right">
              <form className="search-box" onSubmit={handleSearch}>
                <span className="material-symbols-outlined">search</span>
                <input 
                  placeholder="Search products..." 
                  type="search" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </form>
              <button className="icon-btn cart-btn" onClick={() => navigate('/ShoppingCart')}>
                <span className="material-symbols-outlined">shopping_cart</span>
                {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
              </button>
              
              {isAuthenticated ? (
                <div className="user-menu">
                  <button 
                    className="icon-btn user-btn" 
                    onClick={() => navigate(isAdmin() ? '/admin-dashboard' : '/user-dashboard')}
                    title={`${user?.name} (${user?.role?.display_name})`}
                  >
                    <span className="material-symbols-outlined">
                      {isAdmin() ? 'admin_panel_settings' : 'person'}
                    </span>
                  </button>
                  <button className="icon-btn logout-btn" onClick={logout} title="Logout">
                    <span className="material-symbols-outlined">logout</span>
                  </button>
                </div>
              ) : (
                <button className="icon-btn" onClick={() => navigate('/login')}>
                  <span className="material-symbols-outlined">person</span>
                </button>
              )}
              <button 
                className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
                onClick={toggleMenu}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Mobile menu overlay */}
      <div className={`menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>
    </>
  );
};

export default Header;