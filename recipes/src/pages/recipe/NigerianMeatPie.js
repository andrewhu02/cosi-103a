import nmeatpie from '../../img/food/nigerian_meatpie.jpg';
import nmeatpie2 from '../../img/food/nigerian_meatpie_2.jpg';
import '../../App.css';
import React from 'react';
export default function NigerianMeatPie() {
    return (
    <div>
      <h1>Nigerian Meat Pies</h1>
      <div className="container">
            <div className="upper-column1">
              <h5 className="subheader">What is nigerian meat pie?</h5>
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
                <li>4.5 cups of all purpose flour </li>
                <li>2 tsp of baking powder</li>
                <li>2 cups of butter</li>
                <li>up to 1 tsp of salt</li>
                <li>1/2 cup of cold water</li>
              </ul>
              <h4>Filling</h4>
              <ul>
                <li>2 medium-sized potatoes</li>
                <li>2 medium-sized carrots</li>
                <li>1 pound of ground meat(turkey, beef)</li>
                <li>1 medium-sized onion</li>
                <li>2 tablespoons of vegetable oil</li>
                <li>2 cubes/2 tablespoons of bouillon</li>
                <li>1 stem/1 tsp of thyme</li>
                <li>2 tablespoon of plain flour</li>
                <li>1 cup of cold water</li>
                <li>salt to taste</li>
              </ul>
            </div>
            <div class="column2">
              <h2 class="subheader">Cooking Instructions</h2>
              <p>You can start making the filling or dough, make sure to refrigerate the other while you're making either one</p>
              <h4>Making Dough</h4>
              <ol>
                <li>In a bowl, add all dry ingredients (flour, baking powder, salt) and mix together</li>
                <li>Cut butter in small bits and add into the mixture, using hands to crush until it crumbles</li>
                <li>Slowly add water while folding the dough into itself in the bowl</li>
                <li>Take the dough out of ball and knead for about 5- 7 minutes. Leave to rest</li>
              </ol>
              <h4>Making Filling</h4>
              <ol>
                <li>Prepare and cut potatoes, carrots and onions if you had not already.</li>
                <li>Set oil onto the pot and set stove to medium heat.</li>
                <li>Once hot enough, add in the onions</li>
                <li>Once the onions are translucent, add in the meat and stir until pale brown.</li>
                <li>Add in a cup of water, bouillon, and thyme, and stir in until combined.</li>
                <li>Cover the pot with increased heat, once its boiling, add in the carrots and potatoes. Lower the heat</li>
                <li>Stir in the flour to the filling.</li>
                <li>Let it cook for several more minutes, add in salt to taste.</li>
                <li>Once cooked, turn off the heat and set the filling aside</li>
              </ol>
              <h4>Making the Meat Pie</h4>
              <ol>
                <li>Preheat the oven to 335°C</li>
                <li>Cover a 9 x 13 tray in butter or use a baking sheet</li>
                <li>Knead the dough and roll out into a up to 2inches</li>
                <li>Cut out circles from the dough with a cutter or a knife</li>
                <li>Add in filling in the center, try not to overfill</li>
                <li>Add egg wash around the interior edge and fold the dough over the filling and seal it with a fork</li>
                <li>Place all the meat pie onto the tray and cover with egg wash</li>
                <li>Bake for about 30-40 minutes</li>
                <li>Let it cool and enjoy!</li>
              </ol>
            </div>
          </div>
  </div>
)};