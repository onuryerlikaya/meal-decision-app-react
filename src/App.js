import React, { useState, useEffect } from 'react';
import './App.css';
import CategorySelector from './components/CategorySelector';
import MealDisplay from './components/MealDisplay';
import axios from 'axios';

function App() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
        const categoryList = response.data.categories.map(category => category.strCategory);
        setCategories(categoryList);
      } catch (error) {
        console.error('API request error:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryChange = event => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>What should I eat today?</h1>
      </header>
      <main className="app-content">
        <CategorySelector
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategoryChange}
        />
        <MealDisplay selectedCategory={selectedCategory} />
      </main>
      <footer className="app-footer">
        <p>All rights reserved <a href="https://www.linkedin.com/in/onuryerlikaya06/" target="_blank" rel="noopener noreferrer">Onur Yerlikaya</a></p>
    
      </footer>
    </div>
  );
}

export default App;
