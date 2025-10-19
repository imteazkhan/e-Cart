import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ECommerceHome.css';

// Add a helper function to format currency with thousand separators
const formatBDT = (amount) => {
  // Format the number with commas as thousand separators and 2 decimal places
  return amount.toLocaleString('en-BD', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};

const ECommerceHome = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
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
    <div className="ecommerce-home">
      {/* Header */}
      <header className="ecommerce-header">
        <div className="container">
          <div className="header-content">
            <div className="header-left">
              <div className="logo">
                <svg className="logo-icon" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
                </svg>
                <h2>E-Cart</h2>
              </div>
              <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
                <a href="#">Shop</a>
                <a href="#">New Arrivals</a>
                <a href="#">Categories</a>
              </nav>
            </div>
            <div className="header-right">
              <div className="search-box">
                <span className="material-symbols-outlined">search</span>
                <input placeholder="Search products..." type="search"/>
              </div>
              <button className="icon-btn cart-btn" onClick={() => navigate('/ShoppingCart')}>
                <span className="material-symbols-outlined">shopping_cart</span>
                <span className="cart-badge">3</span>
              </button>
              <button className="icon-btn" onClick={() => navigate('/login')}>
                <span className="material-symbols-outlined">person</span>
              </button>
              <button className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
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

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h1>Discover Our New Collection</h1>
              <p>Shop the latest trends and styles. Fresh looks, updated daily.</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#">Shop Now</a>
              </div>
            </div>
          </div>
        </section>

        {/* New Arrivals Section */}
        <section className="section bg-light">
          <div className="container">
            <h2 className="section-title">New Arrivals</h2>
            <div className="products-scroll">
              <ProductCard 
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuDAvIsyoJo7e50xzP376QgnsKWrrfvyRLksiQb5vpyQ1hLqinlOPENMgVMaZ5Y_kyQkNf0EsqmWe93Y4WqN0VxPFLxHVUGrmfVSh-DHDf1E1WxLsXyHOoDJ-UFL7DCit6dLl1OUfMyhT0fVUah-jedRtqY28z_DV-hDdPInp9NgP5JvuyCROiDfL8rhZKdOt0DLi_Nkx3kYhvwxpjrnKgpOnggX4ACksN1Ta3s3FLG5LvK7BNuJWmwRhYbeGwwWHWw2ihYgT9sEIZc0"
                name="Modern T-Shirt"
                price={"৳" + formatBDT(29.99)}
              />
              <ProductCard 
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuDwGsOkqpHy-jwvAf9CoqAlDmaCJNARVwzHpcaesiQUwPk-QnfamaPBzw07ImIYOYQGYxJYFq--7-KI5rNMNb5P2YUyDdvpnG6iBBh8XUA6KDNoJFXUQSpMGcugVE1JDXCs-zW_ZWFesmbVNhHSqaGyh0bGwaESSfhKEy3fxr1Wpb3MfC7CO3WmqYSk1d4KXeZF8u2sFeUnjSoy-X15_SWwE_Ag7R17k-3MOeSz8IkO4Wmxpbd61vW5HqdhIsimWoUATc39xlEddUMu"
                name="Stylish Sneakers"
                price={"৳" + formatBDT(89.99)}
              />
              <ProductCard 
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuBiPvxSUOryHN6dU4xEH_bRF3dfv0Nk9Y4Qc8_3OyJeMt0qm2ETvsiycu528XZ0B181C81ACecaciOq80Plb-iTA-3kP9o4PSE4LN6UggdSjflDEt_5yq1sPptsA1cRNTgMy24ZXfS69jpS9kAa_idvWlSPE37fdeYFNz0aTBkE8sZUj0nDY84aqxEMB2B10H6O_Kc4ip0VdGEghHS90yDHbrWdrcCfw9tH6Cn8nSDKIiQ0sYRl19tBi9zEUsmaEOFGVzszeLFnpKil"
                name="Sleek Watch"
                price={"৳" + formatBDT(149.99)}
              />
              <ProductCard 
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuDX30Z8FO-hQNrHxxbuYFZvW0DIuHGnKHGMXYrHpAP5Pq7Dv2m51GWHS8XyAJzNtnPB0PV5jn5FCwxQ5s4IlG8bV5qgLG63nHgHTx-H2_CbmwMrm65ewJ9mK9xMxC9Bfj4kYEj3AGSsAV0YW85gxDy5eXCzcwqspUM_k2pfRnryviIX2rhVjMLjwgZZHylncVJS8rVOuQJaQR55p39fDA0LZe_FkJk4Wxy_XW_fkTM2dngSJ_CBRr6J-qCR4OsPF6J460frJsrObAoc"
                name="Versatile Backpack"
                price={"৳" + formatBDT(49.99)}
              />
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Shop by Category</h2>
            <div className="categories-grid">
              <CategoryCard 
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuD6r7MDHN5DDv74nGhEU5J6-KKuWgJYk5KnndaLC5mbSmyiF_YYcLsDqrVuWcLsRkUfuQNsbzYJHAOtu7Y5Lsq9rTqJ9AEbE9j5iaXaWuiETB0zTTipFOhO8LWqP2b-AKbjGgrtu2FP98ZiTFlhG6WeHCNEVRRWAtfZkAWpkrQ4dIamHrNjlPT8LCF8_96Wbj-KmiQSrduvLu3z_mnHMYEmYngfkMgGZvhl8js5k1YPLJsbWQ8ZLFCsZlkvHsbvAKzyB5yjV4GyxPmX"
                name="Men's Clothing"
              />
              <CategoryCard 
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuCngB_ssMQ0r9xKo4qpIHr2fCc6a8SB8fmtQqgmr1E_BYpHhtic9JYIzbMrzDXIdCH6zGLAU_0I-0pu0WI6P4vI0B_yRY5vMpWJHoqpX_hoEN906D14YoenFHCF8CLFD0LVAzcojA_gfHi0DK8FrOyVVJd9eM1Z3MqXnyBMoxz7bXnajg7X7BtMYSzVymcPA-AgjLMjypGZF9cROGQ4PDuc6riVsFCfCEZZlHcQRtqR88x2Xi0na8CtZuhlK_BiRdkc85qH7M40lvfn"
                name="Women's Clothing"
              />
              <CategoryCard 
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuDxqixYyGsHX-qCLa8w3x2FZF1AWLymr1namktiZi96ZzaNwG7I602jkbg3odMnS9K1do7rw3WwxUQTbGMFTkdENvvtjKO3lXSmzahqSx-tQrvL8T6zYNnJx-9L4Zucjx7zPve7tBB6a8BIZVOJUf72ssoTcJdfkJZErMi7Sr_3aYEvpq6uGsGX47cWZhK7CcjiBegxceP3omeO6vjRh9bZTw-K8tdXqKCQe6sipVbv-YkPpMkk9gYbwLBoIguc3sVj8_znPQppmWtN"
                name="Electronics"
              />
              <CategoryCard 
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuCchZIXJfxH3yFptHd4YRms6K2qM7yUoxuTDon0bPXZNfGPKungCtVJ2f2JbxK1Xu1FdGIz_kTYbbta9Fel4-jMZf5wdhc-XXoq9G3c8wYEmxZ6ULvRm8I2HFj0THDXg41RnmRQ0WzarhT5AU1ydrXgGBHb5m4LKulLAmK327RuJnBZ3Q0bi_SnAur_S1BH636akR0qHPkzasQqO0M74xIUjOZs8zcG0_B4ObvPCKkaCKVdivWCLsQxqJ5sxII_c-8LQmV6jHk6_bId"
                name="Home Goods"
              />
            </div>
          </div>
        </section>

        {/* Popular Products Section */}
        <section className="section bg-light">
          <div className="container">
            <h2 className="section-title">Popular Products</h2>
            <div className="products-scroll">
              <ProductCard 
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuADDTiN0tK6ELZN7SNR8opRPOLV8XXS_57rIufIjU48GtCYDC0ElnURFF1ppNfNM_n9Y8kCBhx8RdTmNlTWq7VsHz92gPi7Bb2PAHqkEzMW09QZqeQX4a561J7DboPZ3GCOpm0vDYaoqUm7KiIderFOQTpqvZfY3n-xzUYpwf04NvBnep1zkEIHxI4KwHTlNUFNu_3emBjgqaKp8QGb0ZQQLi5ob8muF2NJxIY7BVj4UFrelm6JfcobQp_uKTZM0vf61rAWB8bP7DGW"
                name="Gaming Console"
                price={"৳" + formatBDT(499.99)}
              />
              <ProductCard 
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuD9T0OvNitNUHwvD6oSqahX0sDDX7boEkgIRw0EU_TKGCqAIzGpR1amZ6DRCCctZ_M2xJV-v56X5sGZ0O-DXKUpXbPBqg6CA0KX39A3o0Xo6bj0INUwrqTu3009JlA-nrpdPU9IV63Xiqa3qLQdYVIgmmBRVosuMiJAD8tT_x3IIU-opnZJRmlLpHHNdO7h8ZMoCceDqLn14yUcGBAtrad4syVGpaZUWwhnH9sxDKYAhq-zDqQzBaz08H_4THsxEBWp1uEQRSKBA5Z3"
                name="Best-Selling Novel"
                price={"৳" + formatBDT(15.99)}
              />
              <ProductCard 
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuDaSerfNRMFqcdN6hshe_Ik0QaHLmofLbM_E_ul3CKH-OAyRH4oTPvsPzXcNLWPXXiRjM0BFzCCRmaoZyb3H1ZAYfDlGRKRgF4Uhs7CvrEqtJenJVyy3PngGaecOgRlX5A2-TRNu6UuLoHci002v9YHzduHWvPcOVYv2cXWkLPAo7jwPMEWntJJv95mJifi_DEpIWkH4sUjN_XMQWixXliTPsK3fWuWDpTW3zsFCxcP_XDpEx0ucog4Sl3ill7AnDjA6IUsoKCBpaCZ"
                name="Kitchen Knife Set"
                price={"৳" + formatBDT(79.99)}
              />
              <ProductCard 
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuBUr-9SEW1V0G89X5rRMien6gXmf9nzMXnD_GjDrsMzaX-oq0WoMTwVDfzpoGULMBXmjXipspc7Uw9hCtOgr7hgGDjOH5vBTbXBA8RikPgRgMbhOFuBHBjNco9R8yeCuzaCymlIJM0Wl_VirlZnLS5AnwpUdV-d_8IZlX4eWQDsv6O1afBcQRt663bdfKELJqu6gmPJdXIo83BciIJpoAbR7kXE8stxspyOTKg37pxCqPeAsfssPFJS8hV_Wne6iSyvqnQrpO6Jk1-M"
                name="Decorative Plant"
                price={"৳" + formatBDT(24.99)}
              />
            </div>
          </div>
        </section>

        {/* Featured Brands Section */}
        <section className="section">
          <div className="container">
            <h2 className="section-title text-center">Featured Brands</h2>
            <div className="brands-grid">
              {[
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDse1EDJpKSEGw-eLpilZCSC0ePABtEoA49LqauE4VmIHs-Y8jRz-QyL4WqME-UgrslgVoHZmMrg0BjCTljKo1rTB8pYCctLyGUsWxEVn7ni3j7KMNK0t0GNyqEFf2C5ff7WviXAD1g9ya1_EE_6qVNhidYO_CA5cKe0jryX8MXt3Rc5j_HqwfTYEn3_uvmYxumRFJhmDGLjgWE_N6kRZO7WoOQshANWB-t6YpVmfr_3sRgLAI7Ow9PauIkWf2v1rCr4AmClQQMIhd5",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuD0E35B_LtO_FzoMJlCZ0PD83dWJK3bZGNt5XIxm1ra1FfnJCAKr-ZIVevStcTKIwjaKD3ZaNdbPZaUcQHsVu9fCC-kzwzIxSdudSczOZRmft8N8Oj7b3P4OQ-6J6MicQihOqrlLd0Fu31P9BkbJregksc2NCIa3QpVY6tY_0zDs7OkVnVXwMFgGRi9V2NKbi9QxwGHpu5orKGSh3IpINcVvfdRRhtOCe1cwIKj232Oq3fHnly1M4X1ssnlOSLhhNgVoqtXwheKPVLC",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCeGsa4lEDzUriX8H3VTYwTEfs7_WJcjrsm_irB4qTPNP7yh6AFy0hbbKcdghWUyhJPMIX334Oyp8bDV4VkpAqBJ-xg1n4ft6awH8Voubp2AzECxJH46oGdntqDMe-MdnDTc49KzIFlJyi_VXblWWnwCRWnMI2pCjwtR300dkoT65lI5W02b4YuDd2pBJGtAiQe8GtFky3evJobyScxvd_hd6VRD9dM6UfHbmntVV7D7cIDaCMoj2TMWpHzt7wEy1nbKt36kNyXhGH5",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCtM9SjPnuZuTGU_Zz2Kwr7XwCseeIHrqlTiPFpUTEaim8NQck2HIf5i7D3bO-brhBYe0AFVlotVJdH7BrivAA7J0HGSl-PqXqHfYnrBEQU4EeSH44iNDMs_kCtlsfSN2v4Rdh-1uzL3HMCEdUd3dk1J8woH6f9UllTe_7Rcb6rj828ye-wYr4kBZaeOx7f-cfOBR7iYeR9Pg2zWQdTNWe48Mjjsjka_mY9KiJGLKs-2DoBw22CyQWFoaF7BUhBpGm019oS0xbQOElc",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDyz-yI683ImI0KhtJYsPYnnT229JM4r-RnLo301k9Qi-1KjnxIDYCvY1gob2ajYAzJmAcU-laHs4WtGba_1DGwt_OG49GgBsLMs9daSGVwH2mIAWRt4EDRvWDq5TyUnoQQMAKwEf8N4yt5hFQUKcUa-769-feOQUKuZBIlytKhkTiBnuRu5i-3C9z_WhBfnXV5JVhGX7tTGja6W7nsMlEPpJIeVXqj-6BBrRV861j1jyaE4D4amvx2FDiz7bQVh-3Hg7kt2GduOuzY",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuD5FFr5awFx-SFVzlYgtD-lS6ib_FPS4r0na_zKAQYlboku3zt_c7nMT1pPxkxZdsfCfmtFIOfM-AzeSJc6i5Kv1bQ8wNx25ahBTjQdhcgwf9_ONMfKWuCUBziDeVacqkRXKJEVkkXfk2oiVjVUD7OiIj2TW7MHf1tHFukHnmWh5gLhL9hwLg5hQbc13tUEmOKhGwTitolhnC-PjTPbNuQHYhP5A0Q9quxgxL6ej6oiQVG4p1PLIMTyeFm257rEQPB9roE5QWcz-DhK"
              ].map((src, index) => (
                <div key={index} className="brand-item">
                  <img src={src} alt={`Brand ${index + 1}`}/>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="newsletter-section">
          <div className="container">
            <div className="newsletter-content">
              <h2>Stay in the loop.</h2>
              <h3>Get exclusive offers.</h3>
              <form className="newsletter-form">
                <input placeholder="Enter your email" type="email"/>
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

// Product Card Component
const ProductCard = ({ image, name, price }) => {
  return (
    <div className="product-card">
      <div className="product-image" style={{backgroundImage: `url("${image}")`}}></div>
      <div className="product-info">
        <h5>{name}</h5>
        <p className="price">{price}</p>
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  );
};

// Category Card Component
const CategoryCard = ({ image, name }) => {
  return (
    <div className="category-card">
      <div className="category-image" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.6)), url("${image}")`}}>
        <h5>{name}</h5>
      </div>
    </div>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="ecommerce-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              <svg className="logo-icon" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
              </svg>
              <h2>E-Cart</h2>
            </div>
            <p>Your one-stop shop for everything.</p>
            <div className="social-links">
              <SocialIcon />
            </div>
          </div>
          <div className="footer-links">
            <FooterLinks />
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} E-Cart , Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Social Icons Component
const SocialIcon = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: <path clipRule="evenodd" d="M22 12c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.885 2 12.315 2zM12 7.188a4.813 4.813 0 100 9.625 4.813 4.813 0 000-9.625zM12 15a3 3 0 110-6 3 3 0 010 6zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" fillRule="evenodd" />
    },
    {
      name: 'Instagram',
      icon: <path clipRule="evenodd" d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
    },
    {
      name: 'Twitter',
      icon: <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
    }
  ];

  return (
    <>
      {socialLinks.map((social, index) => (
        <a key={index} href="#">
          <span className="sr-only">{social.name}</span>
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            {social.icon}
          </svg>
        </a>
      ))}
    </>
  );
};

// Footer Links Component
const FooterLinks = () => {
  const linkSections = [
    {
      title: "Solutions",
      links: ["Marketing", "Analytics", "Commerce"]
    },
    {
      title: "Support",
      links: ["Pricing", "FAQ", "Guides"]
    },
    {
      title: "Company",
      links: ["About", "Blog", "Jobs"]
    },
    {
      title: "Legal",
      links: ["Claim", "Privacy", "Terms"]
    }
  ];

  return (
    <div className="footer-links-grid">
      {linkSections.map((section, index) => (
        <div key={index} className="footer-link-section">
          <h6>{section.title}</h6>
          <ul>
            {section.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ECommerceHome;