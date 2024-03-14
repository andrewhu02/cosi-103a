import nmeatpie from '../../img/food/nigerian_meatpie.jpg';
import nmeatpie2 from '../../img/food/nigerian_meatpie_2.jpg';
import '../../App.css';
import React from 'react';
import RecipeStep from '../recipe-api/RecipeStep';

export const meatpieInstructions = [
  {
    title: 'Making Dough',
    desc: [
      'In a bowl, add all dry ingredients (flour, baking powder, salt) and mix together.',
    ],
    num: 1,
  },
  {
    title: '',
    desc: [
      'Cut butter into small bits and add it to the mixture, using hands to crush until it crumbles.',
    ],
    num: 2,
  },
  {
    title: '',
    desc: [
      'Slowly add water while folding the dough into itself in the bowl.',
    ],
    num: 3,
  },
  {
    title: '',
    desc: [
      'Take the dough out in a ball and knead for about 5-7 minutes. Leave it to rest.',
    ],
    num: 4,
  },
  {
    title: 'Making Filling',
    desc: [
      'Prepare and cut potatoes, carrots, and onions if you had not already.',
    ],
    num: 5,
  },
  {
    title: '',
    desc: [
      'Set oil onto the pot and set the stove to medium heat.',
    ],
    num: 6,
  },
  {
    title: '',
    desc: [
      'Once hot enough, add in the onions.',
    ],
    num: 7,
  },
  {
    title: '',
    desc: [
      'Once the onions are translucent, add in the meat and stir until pale brown.',
    ],
    num: 8,
  },
  {
    title: '',
    desc: [
      'Add in a cup of water, bouillon, and thyme, and stir until combined.',
    ],
    num: 9,
  },
  {
    title: '',
    desc: [
      'Cover the pot with increased heat, once it\'s boiling, add in the carrots and potatoes. Lower the heat.',
    ],
    num: 10,
  },
  {
    title: '',
    desc: [
      'Stir in the flour to the filling.',
    ],
    num: 11,
  },
  {
    title: '',
    desc: [
      'Let it cook for several more minutes, add in salt to taste.',
    ],
    num: 12,
  },
  {
    title: '',
    desc: [
      'Once cooked, turn off the heat and set the filling aside.',
    ],
    num: 13,
  },
  {
    title: 'Making the Meat Pie',
    desc: [
      'Preheat the oven to 335°C.',
    ],
    num: 14,
  },
  {
    title: '',
    desc: [
      'Cover a 9 x 13 tray in butter or use a baking sheet.',
    ],
    num: 15,
  },
  {
    title: '',
    desc: [
      'Knead the dough and roll out into up to 2 inches.',
    ],
    num: 16,
  },
  {
    title: '',
    desc: [
      'Cut out circles from the dough with a cutter or a knife.',
    ],
    num: 17,
  },
  {
    title: '',
    desc: [
      'Add in filling in the center, try not to overfill.',
    ],
    num: 18,
  },
  {
    title: '',
    desc: [
      'Add egg wash around the interior edge and fold the dough over the filling and seal it with a fork.',
    ],
    num: 19,
  },
  {
    title: '',
    desc: [
      'Place all the meat pie onto the tray and cover with egg wash.',
    ],
    num: 20,
  },
  {
    title: '',
    desc: [
      'Bake for about 30-40 minutes.',
    ],
    num: 21,
  },
  {
    title: '',
    desc: [
      'Let it cool and enjoy!',
    ],
    num: 22,
  },
];

const NigerianMeatPie = () => {
  return (
    <div>
      <h1>Nigerian Meat Pies</h1>
      <div className="container">
        <div className="upper-column1">
          <h5 className="subheader">What is Nigerian Meat Pie?</h5>
          <p className="recipe-description">Nigerian Meat Pie is a savory and comforting pastry that holds a delicious filling of seasoned ground meat and vegetables. The golden-brown, flaky crust encases a flavorful mixture of minced meat, often beef or a combination of beef and chicken, along with finely chopped potatoes, carrots, and onions.</p>
          <p className="recipe-description">The filling is cooked to perfection with a blend of aromatic spices and herbs, creating a savory and hearty concoction. The pastry itself is tender and buttery, providing a delightful contrast to the well-seasoned interior. Nigerian Meat Pies are commonly enjoyed as a snack or appetizer, offering a satisfying combination of textures and tastes in every bite.</p>
          <p className="recipe-description">Whether served at gatherings, celebrations, or enjoyed as a snack on the go, Nigerian Meat Pie is a beloved treat that showcases the rich culinary traditions of Nigeria. The pastry's golden exterior and the savory filling make it a flavorful and comforting choice for those seeking a taste of Nigerian culinary delights.</p>
        </div>
        <div className="upper-column2">
          <img src={nmeatpie} alt="Sample Recipe" className="center scaled-image padded-image" />
          <img src={nmeatpie2} alt="Sample Recipe" className="center scaled-image padded-image" />
        </div>
      </div>
      <div class="container">
        <div class="column1">
          <h2 class="subheader">Ingredients</h2>
          <h4>Dough</h4>
          <ul>
            <li>4.5 cups of all-purpose flour</li>
            <li>2 tsp of baking powder</li>
            <li>2 cups of butter</li>
            <li>up to 1 tsp of salt</li>
            <li>1/2 cup of cold water</li>
          </ul>
          <h4>Filling</h4>
          <ul>
            <li>2 medium-sized potatoes</li>
            <li>2 medium-sized carrots</li>
            <li>1 pound of ground meat (turkey, beef)</li>
            <li>1 medium-sized onion</li>
            <li>2 tablespoons of vegetable oil</li>
            <li>2 cubes/2 tablespoons of bouillon</li>
            <li>1 stem/1 tsp of thyme</li>
            <li>2 tablespoons of plain flour</li>
            <li>1 cup of cold water</li>
            <li>Salt to taste</li>
          </ul>
        </div>
        <div class="column2">
          <h2 class="subheader">Cooking Instructions</h2>
          <p>You can start making the filling or dough, make sure to refrigerate the other while you're making either one.</p>
          {meatpieInstructions.map((step) => (
            <RecipeStep key={step.num} step={step} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NigerianMeatPie;
