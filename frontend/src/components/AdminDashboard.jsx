import React, { useState } from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      orderNumber: '#12345',
      customer: 'John Doe',
      date: '2023-10-27',
      total: '$150.00',
      status: 'Shipped'
    },
    {
      id: 2,
      orderNumber: '#12346',
      customer: 'Peter Jones',
      date: '2023-10-26',
      total: '$75.50',
      status: 'Delivered'
    },
    {
      id: 3,
      orderNumber: '#12347',
      customer: 'Sarah Smith',
      date: '2023-10-25',
      total: '$25.00',
      status: 'Processing'
    }
  ]);

  const stats = [
    {
      title: 'Total Revenue',
      value: '$45,231.89',
      change: '+20.1% from last month',
      changeType: 'positive'
    },
    {
      title: 'Total Sales',
      value: '+1,234',
      change: '+12.5% from last month',
      changeType: 'positive'
    },
    {
      title: 'New Customers',
      value: '+316',
      change: '-2.8% from last month',
      changeType: 'negative'
    },
    {
      title: 'Pending Orders',
      value: '42',
      change: 'Updated just now',
      changeType: 'neutral'
    }
  ];

  const menuItems = [
    { icon: 'dashboard', label: 'Dashboard' },
    { icon: 'history', label: 'Order History' },
    { icon: 'home', label: 'Addresses' },
    { icon: 'person', label: 'Account Details' }
  ];

  const adminMenuItems = [
    { icon: 'shopping_cart', label: 'Orders', active: true },
    { icon: 'inventory_2', label: 'Products' },
    { icon: 'group', label: 'Users' },
    { icon: 'analytics', label: 'Analytics' }
  ];

  const handleStatusChange = (orderId, newStatus) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  const getChangeColor = (changeType) => {
    switch (changeType) {
      case 'positive': return 'positive';
      case 'negative': return 'negative';
      default: return 'neutral';
    }
  };

  return (
    <div className="admin-dashboard">
      <div className="dashboard-layout">
        {/* Sidebar */}
        <aside className="dashboard-sidebar">
          <div className="sidebar-header">
            <div className="user-profile">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCH5y9MkTQ7GkN-vY5fftfFHhJPitLo-swdt-ECTL2Qk61W0YXIDxMmK9U-34X8nR8b7zSymgpq4wSFhdlOPiTDJxotpkGtn_M-vuckCgPCMenLaiEj2rLy3pYxEWlD8QWVrp24-H7BjJrEEg_2KkmbA_04Apc44DW3vjcdAe8aA_lBzJQVifTUjjUb4Q0JmlV1daiAldE2td_22h4jVcRdqq4ntDZK27tDRC78OkPpjZbpXKZ4YVRhbt2ymR_Z1MH0JxpuJhYnrZ9"
                alt="Admin profile picture"
                className="profile-image"
              />
              <div className="profile-info">
                <h3>Jane Doe (Admin)</h3>
                <p>admin@example.com</p>
              </div>
            </div>
          </div>

          <nav className="sidebar-nav">
            {menuItems.map((item, index) => (
              <button key={index} className="nav-item">
                <span className="material-symbols-outlined">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
            
            {/* Admin Panel Section */}
            <div className="nav-section">
              <h4 className="section-title">Admin Panel</h4>
              {adminMenuItems.map((item, index) => (
                <button
                  key={index}
                  className={`nav-item ${item.active ? 'active' : ''}`}
                >
                  <span className="material-symbols-outlined">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            {/* Logout */}
            <button className="nav-item logout">
              <span className="material-symbols-outlined">logout</span>
              <span>Logout</span>
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="dashboard-main">
          <div className="dashboard-content">
            <h1 className="dashboard-title">Admin Dashboard</h1>

            {/* Order Management Section */}
            <section className="dashboard-section">
              <h2 className="section-title">Order Management</h2>
              <div className="orders-table">
                <table>
                  <thead>
                    <tr>
                      <th>Order Number</th>
                      <th>Customer</th>
                      <th>Date</th>
                      <th>Total</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order.id}>
                        <td>{order.orderNumber}</td>
                        <td>{order.customer}</td>
                        <td>{order.date}</td>
                        <td>{order.total}</td>
                        <td>
                          <select
                            className="status-select"
                            value={order.status}
                            onChange={(e) => handleStatusChange(order.id, e.target.value)}
                          >
                            <option value="Shipped">Shipped</option>
                            <option value="Processing">Processing</option>
                            <option value="Delivered">Delivered</option>
                            <option value="Cancelled">Cancelled</option>
                          </select>
                        </td>
                        <td>
                          <button className="action-btn">
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Quick Stats Section */}
            <section className="dashboard-section">
              <h2 className="section-title">Quick Stats</h2>
              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-card">
                    <h3 className="stat-title">{stat.title}</h3>
                    <p className="stat-value">{stat.value}</p>
                    <p className={`stat-change ${getChangeColor(stat.changeType)}`}>
                      {stat.change}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;