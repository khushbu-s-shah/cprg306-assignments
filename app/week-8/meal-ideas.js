/*"use client";

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

export default MealIdeas;*/
"use client";

import { useEffect, useState } from 'react';

async function fetchMealIdeas(ingredient) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();
  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadMealIdeas() {
      setLoading(true);
      setError('');
      try {
        const mealIdeas = await fetchMealIdeas(ingredient);
        if (mealIdeas.length === 0) {
          setError(`No meal ideas available for "${ingredient}" at this time.`);
        }
        setMeals(mealIdeas);
      } catch (err) {
        setError('Failed to fetch meal ideas. Please try again later.');
      }
      setLoading(false);
    }

    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Meal Ideas for {ingredient}</h2>
      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {meals.map(meal => (
          <div key={meal.idMeal} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{meal.strMeal}</h3>
              <p className="text-sm text-gray-600">
                {meal.strInstructions ? meal.strInstructions.slice(0, 100) + (meal.strInstructions.length > 100 ? '...' : '') : 'Instructions not available'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
