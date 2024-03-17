import chocchip from '../../img/food/choc_chip_cookies.jpg';
import '../../App.css';
import React from 'react';
import RecipeStep from '../recipe-api/RecipeStep'; 
export const cookieInstructions = [
  {
    title: 'Preheat the Oven',
    desc: 'Preheat the oven to 350°C degrees, or you can start preheating after step 7, depending on your pace',
    num: 1,
  },
  {
    title: 'Melt Butter',
    desc: 'If you haven’t already, prepare the melted butter by either melting it at low heat in a pan on the stove or melting it in the microwave',
    num: 2,
  },
  {
    title: 'Cream Butter and Sugars',
    desc: 'Cream the butter with the white sugar and brown sugar/molasses until both are incorporated or about 2 - 3 minutes',
    num: 3,
  },
  {
    title: 'Add Eggs and Vanilla',
    desc: 'Mix the eggs, with egg yolk and white, and the vanilla extract into the wet mixture',
    num: 4,
  },
  {
    title: 'Combine Dry Ingredients',
    desc: 'In a separate bowl, combine and sift the dry ingredients (flour, salt, baking powder, espresso powder)',
    num: 5,
  },
  {
    title: 'Incorporate Dry Ingredients',
    desc: 'Gradually add in the dry ingredients into the wet mixture until incorporated',
    num: 6,
  },
  {
    title: 'Stir in Chocolate Chips',
    desc: 'Stir in the chocolate chips until incorporated',
    num: 7,
  },
  {
    title: 'Shape and Bake',
    desc: 'While the oven is preheating, shape small balls out of the dough and place on a 9 x 13 pan, 16 are usually expected',
    num: 8,
  },
  {
    title: 'Bake',
    desc: 'Once the oven is preheated, bake the cookies for 12 - 15 minutes',
    num: 9,
  },
  {
    title: 'Cool and Enjoy',
    desc: 'Take the cookies out of the oven and let them cool for at least 10 minutes. Enjoy!',
    num: 10,
  },
];

const ChocoChip = () => {
  return (
    <div>
      <h1>Chocolate Chip Cookies</h1>
      <div className="container">
        <div className="upper-column1">
          <h5 className="subheader">The best chocolate chip cookies recipe ever</h5>
          <p className="recipe-description">This is the best chocolate chip cookies recipe ever! No funny ingredients, no chilling time, etc. Just a simple, straightforward, amazingly delicious, doughy yet still fully cooked, chocolate chip cookie that turns out perfectly every single time!</p>
          <p className="recipe-description">Everyone needs a classic chocolate chip cookie recipe in their repertoire, and this is mine. It is seriously the Best Chocolate Chip Cookie Recipe Ever! I have been making these for many, many years and everyone who tries them agrees they’re out-of-this-world delicious!</p>
        </div>
        <div className="upper-column2">
          <img src={chocchip} alt="Sample Recipe" className="center scaled-image padded-image" />
        </div>
      </div>
      <div className="container">
        <div className="column1">
          <h2 className="subheader">Ingredients</h2>
              <ul>
                <li>3 cups of all purpose flour</li>
                <li>1/2 tsp of baking powder</li>
                <li>1/4 tsp of salt</li>
                <li>1/4 tsp of espresso powder</li>
                <li>1 cup of plain white sugar</li>
                <li>1 cup of brown sugar or molasses</li>
                <li>1 cup of melted butter</li>
                <li>2 eggs</li>
                <li>1 tsp of vanilla extract</li>
                <li>2 cups of chocolate chips/chunks</li>
              </ul>
        </div>
        <div className="column2">
          <h2 className="subheader">Cooking Instructions</h2>
          <ol>
            {cookieInstructions.map((step, index) => (
              <RecipeStep key={index} step={step} />
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ChocoChip;
