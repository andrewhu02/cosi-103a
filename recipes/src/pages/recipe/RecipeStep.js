// RecipeStep.js
import React from 'react';

const RecipeStep = ({ step }) => {
  return (
    <div>
      <h4>{step.title}</h4>
      <p>{step.desc}</p>
    </div>
  );
};

export default RecipeStep;
