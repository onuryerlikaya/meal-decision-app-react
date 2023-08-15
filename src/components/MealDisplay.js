import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MealDisplay = ({ selectedCategory }) => {
  const [randomMeal, setRandomMeal] = useState(null);

  useEffect(() => {
    if (!selectedCategory) return;

    const fetchRandomMeal = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`
        );
        const meals = response.data.meals;
        if (meals) {
          const randomIndex = Math.floor(Math.random() * meals.length);
          const selectedMeal = meals[randomIndex];
          setRandomMeal(selectedMeal);
        }
      } catch (error) {
        console.error('API request error:', error);
      }
    };

    fetchRandomMeal();
  }, [selectedCategory]);

  return (
    <div className="meal-display">
      <h2>Your proposal today :</h2>
      {randomMeal ? (
        <div className="meal">
          <h3>{randomMeal.strMeal}</h3>
          <img src={randomMeal.strMealThumb} alt={randomMeal.strMeal} />
          <p>{randomMeal.strInstructions}</p>
        </div>
      ) : (
        <p>This application is intended to be a solution to the indecision we experience at mealtimes on any given day. So, pick a category you want to eat to resolve your indecision and get started.</p>
      )}
    </div>
  );
};

export default MealDisplay;
