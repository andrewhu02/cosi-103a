import pesto from '../../img/food/pesto.jpg';
import pesto2 from '../../img/food/pesto2.jpg';
import '../../App.css';
import React from 'react';
import RecipeStep from '../recipe-api/RecipeStep';

export const pastaInstructions = [
  {
    title: '',
    desc: [
      'Toast nuts in a dry skillet over medium heat, shaking frequently, until fragrant, browned and not burned. Pulse them in a food processor until chopped but not at all powdery.',
    ],
    num: 1,
  },
  {
    title: '',
    desc: [
      'Wash the basil; dry it in a salad spinner. Put it in the food processor with the garlic and as much oil as you need to allow the machine to do its work. Process, adding salt, pepper and oil as needed. When the pesto is smooth and delicious, stir in or pulse in the cheese.',
    ],
    num: 2,
  },
  {
    title: '',
    desc: [
      'Cook the pasta in boiling salted water until it\'s tender but not mushy. Dress with the pesto, thinning with a little of the cooking water if necessary. Serve immediately.',
    ],
    num: 3,
  },
];

const PastaPesto = () => {
  return (
    <div>
      <h1>Pasta Pesto</h1>
      <div className="container">
      <div className="upper-column1">
        <h5 className="subheader">Why you should make pasta with pesto</h5>
        <p className="recipe-description">Pasta with Pesto is a delightful and classic Italian dish that combines simple yet exquisite flavors. Al dente pasta, cooked to perfection, is generously coated with a vibrant green pesto sauce. The pesto, made from fresh basil, garlic, toasted nuts, and Parmesan cheese, imparts a burst of herbaceous and nutty notes to the dish.</p>
        <p className="recipe-description">The pasta, entwined with the velvety green goodness of the pesto, creates a harmonious blend of flavors and textures. Each bite offers a satisfying balance between the tender pasta and the rich, aromatic sauce. The dish is often garnished with additional Parmesan cheese, adding a final layer of savory indulgence.</p>
        <p className="recipe-description">Pasta with Pesto is a celebration of simplicity and freshness, showcasing the beauty of high-quality ingredients. It's a timeless favorite that brings the essence of Italian cuisine to the table, promising a satisfying and flavorful dining experience.</p>
      </div>
      <div className="upper-column2">
        <img src={pesto} alt="Sample Recipe" className="center scaled-image padded-image"/>
        <img src={pesto2} alt="Sample Recipe" className="center scaled-image padded-image"/>
      </div>
    </div>

    <div className="container">
      <div className="column1">
          <h2 className= "subheader">Ingredients</h2>
          <ul>
            <li>1/2 cup walnuts or pine nuts</li>
            <li>Big bunch basil, about 10 stems</li>
            <li>2 cloves garlic, peeled, or to taste</li>
            <li>Olive oil as needed</li>
            <li>Salt and pepper</li>
            <li>Grated Parmesan to taste</li>
            <li>1 pound pasta, any shape</li>
          </ul>
      </div>
        <div class="column2">
          <h2 class="subheader">Cooking Instructions</h2>
          {pastaInstructions.map((step) => (
            <RecipeStep key={step.num} step={step} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PastaPesto;
