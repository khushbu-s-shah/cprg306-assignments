"use client";

import React, { useEffect, useState } from "react";

function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  // Function to fetch meal ideas from the API
  async function fetchMealIdeas(ingredient) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals;
  }

  // Function to load meal ideas
  const loadMealIdeas = async () => {
    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas);
  };

  // Use useEffect to call loadMealIdeas whenever the ingredient prop changes
  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  return (
    <div>
      <h2>Meal Ideas for {ingredient}</h2>
      <ul>
        {meals && meals.map(meal => (
          <li key={meal.idMeal}>
            <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: '100px', height: '100px' }} />
            {meal.strMeal}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MealIdeas;
