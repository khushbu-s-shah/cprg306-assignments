"use client";

import { useState, useEffect } from 'react';

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  async function fetchMealIdeas(ingredient) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals || [];
  }

  async function fetchMealDetails(mealId) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
    const data = await response.json();
    return data.meals ? data.meals[0] : null;
  }

  /*async function loadMealIdeas() {
    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas);
  }*/

    useEffect(() => {
      const loadMealIdeas = async () => {
        if (ingredient) {
          const fetchedMeals = await fetchMealIdeas(ingredient);
          setMeals(fetchedMeals);
          setSelectedMeal(null);
        }
      };
   
      loadMealIdeas();
    }, [ingredient]);
   
    const handleMealClick = async (mealId) => {
      const mealDetails = await fetchMealDetails(mealId);
      setSelectedMeal(mealDetails);
    };

  return (
    <div className="p-4 max-w-md mx-auto rounded-xl shadow-md space-y-4 bg-gray-800 mt-4">
      <h2 className="text-2xl font-bold text-white">Meal Ideas for {ingredient}</h2>
      <div className="overflow-hidden rounded-lg">
        <ul className="divide-y divide-gray-700">
          {meals.map((meal) => (
            <li key={meal.idMeal} className="flex items-center space-x-4 p-4 cursor-pointer hover:bg-gray-700 transition duration-300" onClick={() => handleMealClick(meal.idMeal)}>
              <img src={meal.strMealThumb} alt={meal.strMeal} className="w-16 h-16 rounded-full" />
              <span className="text-white">{meal.strMeal}</span>
            </li>
          ))}
        </ul>
      </div>
      {selectedMeal && (
        <div className="p-4 bg-gray-900 rounded-lg mt-4">
          <h3 className="text-xl font-bold text-white">{selectedMeal.strMeal}</h3>
          <img src={selectedMeal.strMealThumb} alt={selectedMeal.strMeal} className="w-32 h-32 rounded-lg mx-auto my-4" />
          <ul className="list-disc list-inside text-white">
            {Object.keys(selectedMeal)
              .filter((key) => key.startsWith('strIngredient') && selectedMeal[key])
              .map((key, index) => (
                <li key={index}>{selectedMeal[key]} - {selectedMeal[`strMeasure${key.slice(13)}`]}</li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};
 

export default MealIdeas;
