import chickenandrice from '../../img/food/chickenandrice.jpg';
import '../../App.css';
import React from 'react';
import RecipeStep from '../recipe-api/RecipeStep';

export const chickenInstructions = [
  {
    title: 'Chicken',
    desc: 'Cut the chicken beforehand to cook it more evenly and avoid staining the cutting board',
    num: 1,
  },
  {
    title: '',
    desc: 'In a bowl, add the olive oil, lemon juice, vinegar, garlic cloves, all the spices, and the salt and pepper for a chicken marinade.',
    num: 2,
  },
  {
    title: '',
    desc: 'Stir until well mixed, then add chicken and toss to coat evenly. Cover the bowl and marinate for 1-2 hours or more.',
    num: 3,
  },
  {
    title: '',
    desc: 'Heat the vegetable oil in a large skillet on medium high until the oil pops, then add the chicken. Cook until golden brown and cooked through (about 5-6 minutes, or 3-4 if it has been cut already)',
    num: 4,
  },
  {
    title: '',
    desc: 'Cut the chicken now if necessary. Let the meat rest for 5-10 minutes, and begin prepping the rice.',
    num: 5,
  },
  {
    title: 'Rice',
    desc: 'Add the butter to a large saucepan/pot over medium heat. Once melted, add the turmeric and cumin, and stir for 1 minute or until spices are fragrant.',
    num: 6,
  },
  {
    title: '',
    desc: 'Add the rice and stir for 4 minutes to toast it. Add the chicken stock and a pinch of salt and pepper to season. Stir and bring to a boil, then reduce heat to a simmer, cover and cook for 15 minutes.',
    num: 7,
  },
  {
    title: '',
    desc: 'After the rice is cooked and the water is absorbed, remove pan from the heat and wait 10-15 minutes before disturbing. Fluff gently with a fork.',
    num: 8,
  },
  {
    title: '',
    desc: 'Finally, plate the chicken on top of the rice, then top with parsley and tomato',
    num: 9,
  },
];

const Chicken = () => {
  return (
    <div>
      <h1>Chicken and Rice</h1>
      <div className="container">
        <div className="upper-column1">
          <p className="recipe-description">
            Halal Guys chicken and rice is the perfect combination of delicious marinated chicken, buttery turmeric and cumin spiced rice, and an addictive white sauce that brings the whole thing together. Amazing!
          </p>
          <h5 className="subheader">What is halal guys chicken and rice?</h5>
          <p className="recipe-description">
            It’s a famous dish that originated from a street cart in NYC. My husband and I actively sought out the food cart on our honeymoon! The chicken used in the NYC cart is halal (can be consumed by Muslims) so it became a flocking point to Muslim locals, tourists, then basically anyone wanting great street food. The definition of a great street food meal, every component of this dish works together so well.
          </p>
          <h5 className="subheader">Why should you try this recipe?</h5>
          <p className="recipe-description">
            The rice is buttery and full of flavor - I think it’s the best rice I’ve cooked at home. The chicken is tender and juicy and full of flavor from the marination, and the white sauce is a creamy and just a little sweet.
          </p>
        </div>
        <div className="upper-column2">
          <img src={chickenandrice} alt="Sample Recipe" className="center scaled-image padded-image" />
        </div>
      </div>
      <div className="container">
        <div className="column1">
          <h2 className="subheader">Ingredients</h2>
          <h4>Chicken ingredients</h4>
          <ul>
            <li>2 lbs chicken thighs</li>
            <li>1/4 cup olive oil</li>
            <li>2 tablespoons lemon juice</li>
            {/* ... other ingredients ... */}
          </ul>
          <h4>Rice ingredients</h4>
          <ul>
            <li>2 tablespoons unsalted butter</li>
            <li>1/2 teaspoon turmeric powder</li>
            {/* ... other ingredients ... */}
          </ul>
          <h4>Assembly ingredients</h4>
          <ul>
            {/* ... other ingredients ... */}
          </ul>
        </div>
        <div className="column2">
          <h2 className="subheader">Cooking Instructions</h2>
          <p>
            Recipe modified from{' '}
            <a href="https://everylittlecrumb.com/halal-guys-chicken-and-rice/">everylittlecrumb.com</a>
          </p>
          {chickenInstructions.map((step, index) => (
            <RecipeStep key={index} step={step} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chicken;
