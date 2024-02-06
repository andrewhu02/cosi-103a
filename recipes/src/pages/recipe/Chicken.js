import chickenandrice from '../../img/food/chickenandrice.jpg';
import '../../App.css';
import React from 'react';
export default function Chicken() {
  return (
    <div>
      <h1>Chicken and Rice</h1>
      <div className="container">
        <div className="upper-column1">
          <p className="recipe-description">Halal Guys chicken and rice is the perfect combination of delicious marinated chicken, buttery turmeric and cumin spiced rice, and an addictive white sauce that brings the whole thing together. Amazing!</p>
          <h5 className="subheader">What is halal guys chicken and rice?</h5>
          <p className="recipe-description">It’s a famous dish that originated from a street cart in NYC. My husband and I actively sought out the food cart on our honeymoon! The chicken used in the NYC cart is halal (can be consumed by Muslims) so it became a flocking point to Muslim locals, tourists, then basically anyone wanting great street food. The definition of a great street food meal, every component of this dish works together so well.</p>
          <h5 className="subheader">Why should you try this recipe?</h5>
          <p className="recipe-description">The rice is buttery and full of flavor - I think it’s the best rice I’ve cooked at home. The chicken is tender and juicy and full of flavor from the marination, and the white sauce is a creamy and just a little sweet.</p>
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
            <li>2 tablespoon lemon juice</li>
            <li>1 tablespoon white vinegar</li>
            <li>3 cloves garlic, minced</li>
            <li>1 teaspoon salt</li>
            <li>1/2 teaspoon black pepper</li>
            <li>1 teaspoon oregano powder</li>
            <li>1 teaspoon all spice</li>
            <li>1/2 teaspoon ginger powder</li>
            <li>1/2 teaspoon cumin powder</li>
            <li>1/2 teaspoon paprika powder</li>
            <li>1 tablespoon vegetable oil for cooking</li>
          </ul>
          <h4>Rice ingredients</h4>
          <ul>
            <li>2 tablespoon unsalted butter</li>
            <li>1/2 teaspoon turmeric powder</li>
            <li>1/4 teaspoon cumin powder</li>
            <li>1 1/2 cups basmati rice, optionally soaked for 20 minutes and rinsed until water runs clear</li>
            <li>2 1/2 cups chicken stock or 1 stock cube dissolved in 2 1/2 cups water</li>
            <li>Pinch of salt and pepper to taste</li>
          </ul>
          <h4>Assembly ingredients</h4>
          <ul>
            <li>chopped lettuce</li>
            <li>chopped tomato</li>
            <li>handful chopped parsley</li>
          </ul>
        </div>
        <div className="column2">
          <h2 className="subheader">Cooking Instructions</h2>
          <p>Recipe modified from <a href="https://everylittlecrumb.com/halal-guys-chicken-and-rice/">everylittlecrumb.com</a></p>
          <h4>Chicken</h4>
          <ol>
            <li> (optional). Cut the chicken beforehand to cook it more evenly and avoid staining the cutting board.</li>

            <li>In a bowl, add the olive oil, lemon juice, vinegar, garlic cloves,
              all the spices, and the salt and pepper for a chicken marinade.</li>

            <li>Stir until well mixed, then add chicken and toss to coat evenly. Cover the bowl and marinate for 1-2 hours or more.</li>

            <li>Heat the vegetable oil in a large skillet on medium high until the oil pops, then add the chicken.
              Cook until golden brown and cooked through (about 5-6 minutes, or 3-4 if it has been cut already)</li>
            <li>Cut the chicken now if necessary. Let the meat rest for 5-10 minutes, and begin prepping the rice.</li>
          </ol>
          <h4>Rice</h4>
          <ol>
            <li>Add the butter to a large saucepan/pot over medium heat. Once melted, add the turmeric and cumin, and stir for 1 minutes or until spices are fragrant.</li>
            <li>Add the rice and stir for 4 minutes to toast it. Add the chicken stock and a pinch of salt and pepper to season. Stir and bring to a boil, then reduce heat to a simmer, cover and cook for 15 minutes.</li>
            <li>After the rice is cooked and the water is absorbed, remove pan from the heat and wait 10-15 minutes before disturbing. Fluff gently with a fork.</li>
            <li>Finally, plate the chicken on top of the rice, then top with parsley and tomato</li>
          </ol>

        </div>
      </div>
    </div>
  )
};