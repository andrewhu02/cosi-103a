import guac from '../../img/food/guac.jpg';
import '../../App.css';
import React from 'react';
import RecipeStep from '../recipe-api/RecipeStep';

export const guacInstructions = [
  {
    title: 'Combine Onion and Lime Juice',
    desc: 'In a medium bowl, combine the onion and lime juice, and season with salt and pepper.',
    num: 1,
  },
  {
    title: 'Prepare Jalapeño',
    desc: 'Cut the hard stem end off of the jalapeño and discard, then slice the chile in half lengthwise.',
    num: 2,
  },
  {
    title: 'Chop Jalapeño',
    desc: 'Chop the jalapeño as finely as you can and add to the bowl with the onion and lime juice.',
    num: 3,
  },
  {
    title: 'Prepare Avocados',
    desc: 'Cut the avocados in half lengthwise and pull the halves apart. Use your hands to squeeze the avocado flesh out into the bowl with the other ingredients, or scoop it out with a spoon.',
    num: 4,
  },
  {
    title: 'Mash and Combine',
    desc: 'Using a fork, gently mash the avocados against the side of the bowl until they are mashed to your desired consistency, then stir them into the other ingredients until well combined. Taste and add more salt if desired.',
    num: 5,
  },
];

export default function Guacamole() {
  return (
    <div>
      <h1>Guacamole</h1>
      <div className="container">
        <div className="upper-column1">
          <h5 className="subheader">What is guacamole?</h5>
          <p className="recipe-description">Guacamole is a delicious and popular Mexican dip made primarily from ripe avocados. Mashed to a creamy consistency, it features a perfect blend of flavors enhanced by ingredients such as finely chopped white onions, fresh lime juice, and a touch of salt and pepper. The result is a smooth and flavorful concoction, ideal for dipping tortilla chips or complementing a variety of dishes.</p>
          <p className="recipe-description">With its rich, buttery texture and a hint of zesty acidity, guacamole is a versatile and crowd-pleasing addition to any gathering. Whether as a party snack or a topping for tacos, this classic dip never fails to deliver a burst of fresh, vibrant taste.</p>
        </div>
        <div className="upper-column2">
          <img src={guac} alt="Sample Recipe" className="center scaled-image padded-image"/>
        </div>
      </div>

      <div className="container">
        <div className="column1">
          <h2 className="subheader">Ingredients</h2>
          <ul>
            <li>1/2 cup finely chopped white onion (from 1 small onion)</li>
            <li>2 tablespoons fresh lime juice (from about 1 lime)</li>
            <li>Salt and black pepper</li>
            <li>1 jalapeño</li>
            <li>2 ripe avocados</li>
          </ul>
        </div>
        <div className="column2">
          <h2 className="subheader">Cooking Instructions</h2>
          {guacInstructions.map((step, index) => (
            <RecipeStep key={index} step={step} />
          ))}
        </div>
      </div>
    </div>
  );
}
