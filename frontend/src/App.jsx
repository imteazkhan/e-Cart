import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import ECommerceHome from './components/ECommerceHome'
import ECommerceProductListing from './components/ECommerceProductListing'
import ProductDetails from './components/ProductDetails'
import ShoppingCart from './components/ShoppingCart'
import Checkout from './components/Checkout'
import UserDashboard from './components/UserDashboard'
import AdminDashboard from './components/AdminDashboard'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Login from './components/Login'
import Register from './components/Register'
import ECommerceCategories from './components/ECommerceCategories'

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<ECommerceHome />} />
          <Route path="/products" element={<ECommerceProductListing />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/ShoppingCart" element={<ShoppingCart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/ECommerceCategories" element={<ECommerceCategories />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App