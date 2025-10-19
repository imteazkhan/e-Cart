import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllCategories } from '../data/categories';
import './ECommerceCategories.css';

const ECommerceCategories = () => {
  const navigate = useNavigate();
  const categories = getAllCategories();

  const handleCategoryClick = (categoryId) => {
    // For now, we'll navigate to the products page
    // In a real app, you might want to filter products by category
    navigate('/products');
  };

  return (
    <div className="categories-page">
      <div className="container">
        <div className="page-header">
          <h1>Shop by Category</h1>
          <p>Browse our wide selection of product categories</p>
        </div>
        
        <div className="categories-grid">
          {categories.map((category) => (
            <CategoryCard 
              key={category.id}
              category={category}
              onClick={() => handleCategoryClick(category.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const CategoryCard = ({ category, onClick }) => {
  return (
    <div className="category-card" onClick={onClick}>
      <div className="category-image">
        <img src={category.image} alt={category.name} />
        <div className="category-overlay">
          <h3>{category.name}</h3>
          <p>{category.productCount} products</p>
        </div>
      </div>
      <div className="category-info">
        <p>{category.description}</p>
      </div>
    </div>
  );
};

export default ECommerceCategories;