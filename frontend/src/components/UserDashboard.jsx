import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import './UserDashboard.css';

const UserDashboard = () => {
  const { user, loading } = useAuth();
  
  const [userData, setUserData] = useState({
    name: user?.name || 'John Doe',
    email: user?.email || 'john.doe@example.com',
    password: ''
  });

  const [activeMenu, setActiveMenu] = useState('dashboard');

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
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

  const orders = [
    {
      id: 1,
      orderNumber: '#12345',
      date: '2023-10-27',
      total: formatBDT(150.00),
      status: 'Shipped',
      statusType: 'shipped',
      action: 'Track'
    },
    {
      id: 2,
      orderNumber: '#12346',
      date: '2023-10-26',
      total: formatBDT(75.50),
      status: 'Delivered',
      statusType: 'delivered',
      action: 'View'
    },
    {
      id: 3,
      orderNumber: '#12347',
      date: '2023-10-25',
      total: formatBDT(25.00),
      status: 'Processing',
      statusType: 'processing',
      action: 'View'
    }
  ];

  const addresses = [
    {
      id: 1,
      title: 'Primary Address',
      address: '123 Main St\nAnytown, USA 12345',
      isPrimary: true
    }
  ];

  const menuItems = [
    { icon: 'dashboard', label: 'Dashboard', key: 'dashboard' },
    { icon: 'history', label: 'Order History', key: 'history' },
    { icon: 'home', label: 'Addresses', key: 'addresses' },
    { icon: 'person', label: 'Account Details', key: 'account' },
    { icon: 'logout', label: 'Logout', key: 'logout' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User data updated:', userData);
  };

  const handleMenuClick = (menuKey) => {
    setActiveMenu(menuKey);
  };

  const getStatusBadge = (statusType) => {
    const statusConfig = {
      shipped: { class: 'status-badge shipped' },
      delivered: { class: 'status-badge delivered' },
      processing: { class: 'status-badge processing' }
    };
    
    const config = statusConfig[statusType] || statusConfig.processing;
    return config.class;
  };



  return (
    <div className="user-dashboard">
      <div className="dashboard-layout">
        {/* Sidebar */}
        <aside className="dashboard-sidebar">
          <div className="sidebar-header">
            <div className="user-profile">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCH5y9MkTQ7GkN-vY5fftfFHhJPitLo-swdt-ECTL2Qk61W0YXIDxMmK9U-34X8nR8b7zSymgpq4wSFhdlOPiTDJxotpkGtn_M-vuckCgPCMenLaiEj2rLy3pYxEWlD8QWVrp24-H7BjJrEEg_2KkmbA_04Apc44DW3vjcdAe8aA_lBzJQVifTUjjUb4Q0JmlV1daiAldE2td_22h4jVcRdqq4ntDZK27tDRC78OkPpjZbpXKZ4YVRhbt2ymR_Z1MH0JxpuJhYnrZ9"
                alt="User profile picture"
                className="profile-image"
              />
              <div className="profile-info">
                <h3>John Doe</h3>
                <p>john.doe@example.com</p>
              </div>
            </div>
          </div>

          <nav className="sidebar-nav">
            {menuItems.map((item) => (
              <button
                key={item.key}
                className={`nav-item ${activeMenu === item.key ? 'active' : ''}`}
                onClick={() => handleMenuClick(item.key)}
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="dashboard-main">
          <div className="dashboard-content">
            <h1 className="dashboard-title">Dashboard</h1>

            {/* Recent Orders Section */}
            <section className="dashboard-section">
              <h2 className="section-title">Recent Orders</h2>
              <div className="orders-table">
                <table>
                  <thead>
                    <tr>
                      <th>Order Number</th>
                      <th>Date</th>
                      <th>Total</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order.id}>
                        <td>{order.orderNumber}</td>
                        <td>{order.date}</td>
                        <td>{order.total}</td>
                        <td>
                          <span className={getStatusBadge(order.statusType)}>
                            {order.status}
                          </span>
                        </td>
                        <td>
                          <button className="action-btn">
                            {order.action}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Shipping Addresses Section */}
            <section className="dashboard-section">
              <h2 className="section-title">Shipping Addresses</h2>
              <div className="addresses-grid">
                {addresses.map((address) => (
                  <div key={address.id} className="address-card">
                    <div className="address-header">
                      <div className="address-info">
                        <h3>{address.title}</h3>
                        <p>{address.address}</p>
                      </div>
                      <div className="address-actions">
                        <button className="icon-btn">
                          <span className="material-symbols-outlined">edit</span>
                        </button>
                        <button className="icon-btn">
                          <span className="material-symbols-outlined">delete</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                
                <div className="address-card add-new">
                  <button className="add-address-btn">
                    <span className="material-symbols-outlined">add_circle</span>
                    <span>Add New Address</span>
                  </button>
                </div>
              </div>
            </section>

            {/* Account Details Section */}
            <section className="dashboard-section">
              <h2 className="section-title">Account Details</h2>
              <div className="account-form-card">
                <form onSubmit={handleSubmit} className="account-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={userData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={userData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="••••••••"
                      value={userData.password}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="form-actions">
                    <button type="submit" className="save-btn">
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;