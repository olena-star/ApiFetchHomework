
import React, { useState, useEffect } from 'react';
import RecipeComponent from './RecipeComponent';
import './App.css';

const App = () => {
  const [recipeId, setRecipeId] = useState(1);
  const [recipeData, setRecipeData] = useState(null);

  const fetchRecipe = async (id) => {
    try {
      const response = await fetch(`https://dummyjson.com/recipes/${id}`);
      const data = await response.json();
      setRecipeData(data);
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  useEffect(() => {
    fetchRecipe(recipeId);
  }, [recipeId]);

  const handleNextRecipe = () => {
    setRecipeId((prev) => prev + 1);
  };

  const handlePrevRecipe = () => {
    setRecipeId((prev) => Math.max(1, prev - 1));
  };

  return (
    <div className="container">
      <h1>Твои любимые рецепты</h1>
      {recipeData ? (
        <div className="recipe-container">
          <RecipeComponent recipe={recipeData} />
        </div>
      ) : (
        <p>Loading recipe...</p>
      )}
      <div className="buttons-container">
        <button className="button" onClick={handlePrevRecipe}>Предыдущий рецепт</button>
        <button className="button" onClick={handleNextRecipe}>Следующий рецепт</button>
      </div>
    </div>
  );
};

export default App;

