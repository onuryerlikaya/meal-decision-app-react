import React from 'react';

const CategorySelector = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="category-selector">
      <h2>Choose the category you <br/> want to eat and start eating!</h2>
      <select value={selectedCategory} onChange={onSelectCategory}>
        <option value="">All Categories</option>
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelector;
