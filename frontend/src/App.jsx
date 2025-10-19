import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import ECommerceHome from './components/ECommerceHome'
import ECommerceProductListing from './components/ECommerceProductListing'
import ProductDetails from './components/ProductDetails'
import ShoppingCart from './components/ShoppingCart'
import Checkout from './components/Checkout'
import UserDashboard from './components/UserDashboard'
import AdminDashboard from './components/AdminDashboard'
import Login from './components/Login'
import Register from './components/Register'
import ECommerceCategories from './components/ECommerceCategories'
import { CartProvider } from './contexts/CartContext'
import { AuthProvider } from './contexts/AuthContext'
import Header from './components/Header'
import SearchResults from './components/SearchResults'
import ApiTest from './components/ApiTest'
import ProtectedRoute from './components/ProtectedRoute'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <div className="app">
            <Header />
            <Routes>
            <Route path="/" element={<ECommerceHome />} />
            <Route path="/products" element={<ECommerceProductListing />} />
            <Route path="/product-details/:id" element={<ProductDetails />} />
            <Route path="/ShoppingCart" element={<ShoppingCart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/user-dashboard" element={
              <ProtectedRoute>
                <ErrorBoundary>
                  <UserDashboard />
                </ErrorBoundary>
              </ProtectedRoute>
            } />
            <Route path="/admin-dashboard" element={
              <ProtectedRoute requireAdmin={true}>
                <ErrorBoundary>
                  <AdminDashboard />
                </ErrorBoundary>
              </ProtectedRoute>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/ECommerceCategories" element={<ECommerceCategories />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/api-test" element={<ApiTest />} />
          </Routes>
        </div>
      </CartProvider>
    </AuthProvider>
    </Router>
  )
}

export default App