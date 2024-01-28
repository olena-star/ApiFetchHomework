// RecipeComponent.js
import React from 'react';

const RecipeComponent = ({ recipe }) => {
  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      {/* Добавьте другие данные рецепта, которые необходимо отобразить */}
    </div>
  );
};

export default RecipeComponent;
