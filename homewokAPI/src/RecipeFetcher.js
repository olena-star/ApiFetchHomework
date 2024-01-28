import React, { useState, useEffect } from 'react';
import RecipeComponent from './RecipeComponent';

const RecipeFetcher = ({ recipeId }) => {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/recipes/${recipeId}`);
        const data = await response.json();
        setRecipe(data);
      } catch (error) {
        console.error('Error fetching recipe:', error);
      }
    };

    fetchRecipe();
  }, [recipeId]);

  return (
    <div>
      {recipe ? (
        <RecipeComponent recipe={recipe} />
      ) : (
        <p>Loading recipe...</p>
      )}
    </div>
  );
};

export default RecipeFetcher;