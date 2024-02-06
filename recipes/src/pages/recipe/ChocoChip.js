import chocchip from '../../img/food/choc_chip_cookies.jpg';
import '../../App.css';
import React from 'react';
export default function ChocoChip() {
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
              <img src={chocchip} alt="Sample Recipe" class="center scaled-image padded-image" />
            </div>
          </div>
          {/* <img src={chocchip} alt="Sample Recipe" class="center scaled-image padded-image" /> */}
          <div class="container">
            <div class="column1">
              <h2 class="subheader">Ingredients</h2>
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
            <div class="column2">
              <h2 class="subheader">Cooking Instructions</h2>
              <ol>
                <li>Preheat the oven to 350°C degrees, or you can start preheating after step 7, depends on your pace</li>
                <li>If you haven’t already, prepare the melted butter by either melting it at a low heat in a pan on stove or melting it in the microwave</li>
                <li>Cream the butter with the white sugar and brown sugar/molasses until both incorporated or about 2 - 3 minutes</li>
                <li>Mix the eggs, with egg yolk and white, and the vanilla extract into the wet mixture</li>
                <li>In a separate bowl combine and sift the dry ingredients (flour, salt, baking powder, espresso powder)</li>
                <li>Gradually add in the dry ingredients into the wet mixture until incorporated</li>
                <li>Stir in the chocolate chips until incorporated</li>
                <li>While oven is preheating, shape small balls out of the dough and place on a 9 x 13 pan, 16 is usually expected</li>
                <li>Once the oven is preheated, bake the cookies until 12 - 15 minutes</li>
                <li>Take the cookies out of the oven and let them cool for at least 10 minutes</li>
                <li>Enjoy!</li>
              </ol>
            </div>
          </div>
  </div>
)};