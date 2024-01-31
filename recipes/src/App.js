import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './shared/components/header/Header';
import MainNavigation from './shared/components/navigation/MainNavigation';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <MainNavigation />
    </React.Fragment>
  );
}

export default App;

// import './App.css';
// import Accordion from 'react-bootstrap/Accordion';
// import chickenandrice from './img/chickenandrice.jpg';
// import food from './img/food.jpg';
// import chocchip from './img/choc_chip_cookies.jpg';
// import nmeatpie from './img/nigerian_meatpie.jpg';
// import nmeatpie2 from './img/nigerian_meatpie_2.jpg';
// import guac from './img/guac.jpg';
// import pesto from './img/pesto.jpg'
// import jambalaya from './img/jambalaya.jpg';
// import dumplings from './img/soup_dumplings.jpg';
// import pesto2 from './img/pesto2.jpg';

// function RecipeAccordion() {
//   return (
//     <Accordion defaultActiveKey={null} className="accordion-container">
//       <Accordion.Item eventKey='0'>
//         <Accordion.Header>Halal Guys Chicken and Rice</Accordion.Header>
//         <Accordion.Body>
//         <div className="container">
//             <div className="upper-column1">
//               <p className="recipe-description">Halal Guys chicken and rice is the perfect combination of delicious marinated chicken, buttery turmeric and cumin spiced rice, and an addictive white sauce that brings the whole thing together. Amazing!</p>
//               <h5 className="subheader">What is halal guys chicken and rice?</h5>
//               <p className="recipe-description">It’s a famous dish that originated from a street cart in NYC. My husband and I actively sought out the food cart on our honeymoon! The chicken used in the NYC cart is halal (can be consumed by Muslims) so it became a flocking point to Muslim locals, tourists, then basically anyone wanting great street food. The definition of a great street food meal, every component of this dish works together so well.</p>
//               <h5 className="subheader">Why you should try this recipe?</h5>
//               <p className="recipe-description">The rice is buttery and full of flavor - I think it’s the best rice I’ve cooked at home. The chicken is tender and juicy and full of flavor from the marination, and the white sauce is a creamy and just a little sweet.</p>
//             </div>
//             <div className="upper-column2">
//               <img src={chickenandrice} alt="Sample Recipe" className="center scaled-image padded-image" />
//             </div>
//           </div>
//           {/* <img src={chickenandrice} alt="Sample Recipe" className="center scaled-image padded-image" /> */}
//           <div className="container">
//             <div className="column1">
//               <h2 className="subheader">Ingredients</h2>
//               <h4>Chicken ingredients</h4>
//               <ul>
//                 <li>2 lbs chicken thighs</li>
//                 <li>1/4 cup olive oil</li>
//                 <li>2 tablespoon lemon juice</li>
//                 <li>1 tablespoon white vinegar</li>
//                 <li>3 cloves garlic, minced</li>
//                 <li>1 teaspoon salt</li>
//                 <li>1/2 teaspoon black pepper</li>
//                 <li>1 teaspoon oregano powder</li>
//                 <li>1 teaspoon all spice</li>
//                 <li>1/2 teaspoon ginger powder</li>
//                 <li>1/2 teaspoon cumin powder</li>
//                 <li>1/2 teaspoon paprika powder</li>
//                 <li>1 tablespoon vegetable oil for cooking</li>
//               </ul>
//               <h4>Rice ingredients</h4>
//               <ul>
//                 <li>2 tablespoon unsalted butter</li>
//                 <li>1/2 teaspoon turmeric powder</li>
//                 <li>1/4 teaspoon cumin powder</li>
//                 <li>1 1/2 cups basmati rice, optionally soaked for 20 minutes and rinsed until water runs clear</li>
//                 <li>2 1/2 cups chicken stock or 1 stock cube dissolved in 2 1/2 cups water</li>
//                 <li>Pinch of salt and pepper to taste</li>
//               </ul>
//               <h4>Assembly ingredients</h4>
//               <ul>
//                 <li>chopped lettuce</li>
//                 <li>chopped tomato</li>
//                 <li>handful chopped parsley</li>
//               </ul>
//             </div>
//             <div className="column2">
//               <h2 className="subheader">Cooking Instructions</h2>
//               <p>Recipe modified from <a href="https://everylittlecrumb.com/halal-guys-chicken-and-rice/">everylittlecrumb.com</a></p>
//               <h4>Chicken</h4>
//               <ol>
//                 <li> (optional). Cut the chicken beforehand to cook it more evenly and avoid staining the cutting board.</li>

//                 <li>In a bowl, add the olive oil, lemon juice, vinegar, garlic cloves,
//                   all the spices, and the salt and pepper for a chicken marinade.</li>

//                 <li>Stir until well mixed, then add chicken and toss to coat evenly. Cover the bowl and marinate for 1-2 hours or more.</li>

//                 <li>Heat the vegetable oil in a large skillet on medium high until the oil pops, then add the chicken.
//                   Cook until golden brown and cooked through (about 5-6 minutes, or 3-4 if it has been cut already)</li>
//                 <li>Cut the chicken now if necessary. Let the meat rest for 5-10 minutes, and begin prepping the rice.</li>
//               </ol>
//               <h4>Rice</h4>
//               <ol>
//                 <li>Add the butter to a large saucepan/pot over medium heat. Once melted, add the turmeric and cumin, and stir for 1 minutes or until spices are fragrant.</li>
//                 <li>Add the rice and stir for 4 minutes to toast it. Add the chicken stock and a pinch of salt and pepper to season. Stir and bring to a boil, then reduce heat to a simmer, cover and cook for 15 minutes.</li>
//                 <li>After the rice is cooked and the water is absorbed, remove pan from the heat and wait 10-15 minutes before disturbing. Fluff gently with a fork.</li>
//                 <li>Finally, plate the chicken on top of the rice, then top with parsley and tomato</li>
//               </ol>

//             </div>
//           </div>
//         </Accordion.Body>
//       </Accordion.Item>

//       <Accordion.Item eventKey='1'>
//         <Accordion.Header>Guacamole</Accordion.Header>
//         <Accordion.Body>
//           <div className="container">
//             <div className="upper-column1">
//               <h5 className="subheader">What is guacamole?</h5>
//               <p className="recipe-description">Guacamole is a delicious and popular Mexican dip made primarily from ripe avocados. Mashed to a creamy consistency, it features a perfect blend of flavors enhanced by ingredients such as finely chopped white onions, fresh lime juice, and a touch of salt and pepper. The result is a smooth and flavorful concoction, ideal for dipping tortilla chips or complementing a variety of dishes. With its rich, buttery texture and a hint of zesty acidity, guacamole is a versatile and crowd-pleasing addition to any gathering. Whether as a party snack or a topping for tacos, this classic dip never fails to deliver a burst of fresh, vibrant taste.</p>
//             </div>
//             <div className="upper-column2">
//               <img src={guac} alt="Sample Recipe" className="center scaled-image padded-image"/>
//             </div>
//           </div>
//           {/* <img src={guac} alt="Sample Recipe" className="center scaled-image padded-image"/> */}
//           <div className="container">
//             <div className="column1">
//                 <h2 className= "subheader">Ingredients</h2>
//                 <ul>
//                   <li>1/2 cup finely chopped white onion (from 1 small onion)</li>
//                   <li>2 tablespoons fresh lime juice (from about 1 lime)</li>
//                   <li>Salt and black pepper</li>
//                   <li>1 jalapeño</li>
//                   <li>2 ripe avocados</li>
//                 </ul>
//             </div>
//             <div className="column2">
//                 <h2 className= "subheader">Cooking Instructions</h2>
//                 <ol>
//                   <li>In a medium bowl, combine the onion and lime juice, and season with salt and pepper.</li>
//                   <li>Cut the hard stem end off of the jalapeño and discard, then slice the chile in half lengthwise</li>
//                   <li>Chop the jalapeño as finely as you can and add to the bowl with the onion and lime juice.</li>
//                   <li>Cut the avocados in half lengthwise and pull the halves apart. Use your hands to squeeze the avocado flesh out into the bowl with the other ingredients, or scoop it out with a spoon.</li>
//                   <li>Using a fork, gently mash the avocados against the side of the bowl until they are mashed to your desired consistency, then stir them into the other ingredients until well combined. Taste and add more salt if desired.</li>
//                 </ol>
//             </div>
//           </div>
//         </Accordion.Body>
//       </Accordion.Item>
//       <Accordion.Item eventKey='2'>
//         <Accordion.Header>Pasta with pesto</Accordion.Header>
//         <Accordion.Body>
//           <div className="container">
//             <div className="upper-column1">
//               <h5 className="subheader">Why you should make pasta with pesto</h5>
//               <p className="recipe-description">Pasta with Pesto is a delightful and classic Italian dish that combines simple yet exquisite flavors. Al dente pasta, cooked to perfection, is generously coated with a vibrant green pesto sauce. The pesto, made from fresh basil, garlic, toasted nuts, and Parmesan cheese, imparts a burst of herbaceous and nutty notes to the dish.</p>
//               <p className="recipe-description">The pasta, entwined with the velvety green goodness of the pesto, creates a harmonious blend of flavors and textures. Each bite offers a satisfying balance between the tender pasta and the rich, aromatic sauce. The dish is often garnished with additional Parmesan cheese, adding a final layer of savory indulgence.</p>
//               <p className="recipe-description">Pasta with Pesto is a celebration of simplicity and freshness, showcasing the beauty of high-quality ingredients. It's a timeless favorite that brings the essence of Italian cuisine to the table, promising a satisfying and flavorful dining experience.</p>
//             </div>
//             <div className="upper-column2">
//               <img src={pesto} alt="Sample Recipe" className="center scaled-image padded-image"/>
//               <img src={pesto2} alt="Sample Recipe" className="center scaled-image padded-image"/>
//             </div>
//           </div>
//           {/* <img src={pesto} alt="Sample Recipe" className="center scaled-image padded-image"/> */}
//           <div className="container">
//             <div className="column1">
//                 <h2 className= "subheader">Ingredients</h2>
//                 <ul>
//                   <li>1/2 cup walnuts or pine nuts</li>
//                   <li>Big bunch basil, about 10 stems</li>
//                   <li>2 cloves garlic, peeled, or to taste</li>
//                   <li>Olive oil as needed</li>
//                   <li>Salt and pepper</li>
//                   <li>Grated Parmesan to taste</li>
//                   <li>1 pound pasta, any shape</li>
//                 </ul>
//             </div>
//             <div className="column2">
//                 <h2 className= "subheader">Cooking Instructions</h2>
//                 <ol>
//                   <li>Toast nuts in a dry skillet over medium heat, shaking frequently, until fragrant, browned and not burned. Pulse them in a food processor until chopped but not at all powdery.</li>
//                   <li>Wash the basil; dry it in a salad spinner. Put it in the food processor with the garlic and as much oil as you need to allow the machine to do its work. Process, adding salt, pepper and oil as needed. When the pesto is smooth and delicious, stir in or pulse in the cheese.</li>
//                   <li>Cook the pasta in boiling salted water until it's tender but not mushy. Dress with the pesto, thinning with a little of the cooking water if necessary. Serve immediately.</li>
//                 </ol>
//             </div>
//           </div>
//         </Accordion.Body>
//       </Accordion.Item>
//       <Accordion.Item eventKey='3'>
//         <Accordion.Header>Nigerian Meat Pies</Accordion.Header>
//         <Accordion.Body>
//           <div className="container">
//             <div className="upper-column1">
//               <h5 className="subheader">What is nigerian meat pie?</h5>
//               <p className="recipe-description">Nigerian Meat Pie is a savory and comforting pastry that holds a delicious filling of seasoned ground meat and vegetables. The golden-brown, flaky crust encases a flavorful mixture of minced meat, often beef or a combination of beef and chicken, along with finely chopped potatoes, carrots, and onions.</p>
//               <p className="recipe-description">The filling is cooked to perfection with a blend of aromatic spices and herbs, creating a savory and hearty concoction. The pastry itself is tender and buttery, providing a delightful contrast to the well-seasoned interior. Nigerian Meat Pies are commonly enjoyed as a snack or appetizer, offering a satisfying combination of textures and tastes in every bite.</p>
//               <p className="recipe-description">Whether served at gatherings, celebrations, or enjoyed as a snack on the go, Nigerian Meat Pie is a beloved treat that showcases the rich culinary traditions of Nigeria. The pastry's golden exterior and the savory filling make it a flavorful and comforting choice for those seeking a taste of Nigerian culinary delights.</p>
//             </div>
//             <div className="upper-column2">
//               <img src={nmeatpie} alt="Sample Recipe" className="center scaled-image padded-image" />
//               <img src={nmeatpie2} alt="Sample Recipe" className="center scaled-image padded-image" />
//             </div>
//           </div>
//           {/* <img src={nmeatpie} alt="Sample Recipe" className="center scaled-image padded-image" /> */}
//           <div class="container">
//             <div class="column1">
//               <h2 class="subheader">Ingredients</h2>
//               <h4>Dough</h4>
//               <ul>
//                 <li>4.5 cups of all purpose flour </li>
//                 <li>2 tsp of baking powder</li>
//                 <li>2 cups of butter</li>
//                 <li>up to 1 tsp of salt</li>
//                 <li>1/2 cup of cold water</li>
//               </ul>
//               <h4>Filling</h4>
//               <ul>
//                 <li>2 medium-sized potatoes</li>
//                 <li>2 medium-sized carrots</li>
//                 <li>1 pound of ground meat(turkey, beef)</li>
//                 <li>1 medium-sized onion</li>
//                 <li>2 tablespoons of vegetable oil</li>
//                 <li>2 cubes/2 tablespoons of bouillon</li>
//                 <li>1 stem/1 tsp of thyme</li>
//                 <li>2 tablespoon of plain flour</li>
//                 <li>1 cup of cold water</li>
//                 <li>salt to taste</li>
//               </ul>
//             </div>
//             <div class="column2">
//               <h2 class="subheader">Cooking Instructions</h2>
//               <p>You can start making the filling or dough, make sure to refrigerate the other while you're making either one</p>
//               <h4>Making Dough</h4>
//               <ol>
//                 <li>In a bowl, add all dry ingredients (flour, baking powder, salt) and mix together</li>
//                 <li>Cut butter in small bits and add into the mixture, using hands to crush until it crumbles</li>
//                 <li>Slowly add water while folding the dough into itself in the bowl</li>
//                 <li>Take the dough out of ball and knead for about 5- 7 minutes. Leave to rest</li>
//               </ol>
//               <h4>Making Filling</h4>
//               <ol>
//                 <li>Prepare and cut potatoes, carrots and onions if you had not already.</li>
//                 <li>Set oil onto the pot and set stove to medium heat.</li>
//                 <li>Once hot enough, add in the onions</li>
//                 <li>Once the onions are translucent, add in the meat and stir until pale brown.</li>
//                 <li>Add in a cup of water, bouillon, and thyme, and stir in until combined.</li>
//                 <li>Cover the pot with increased heat, once its boiling, add in the carrots and potatoes. Lower the heat</li>
//                 <li>Stir in the flour to the filling.</li>
//                 <li>Let it cook for several more minutes, add in salt to taste.</li>
//                 <li>Once cooked, turn off the heat and set the filling aside</li>
//               </ol>
//               <h4>Making the Meat Pie</h4>
//               <ol>
//                 <li>Preheat the oven to 335°C</li>
//                 <li>Cover a 9 x 13 tray in butter or use a baking sheet</li>
//                 <li>Knead the dough and roll out into a up to 2inches</li>
//                 <li>Cut out circles from the dough with a cutter or a knife</li>
//                 <li>Add in filling in the center, try not to overfill</li>
//                 <li>Add egg wash around the interior edge and fold the dough over the filling and seal it with a fork</li>
//                 <li>Place all the meat pie onto the tray and cover with egg wash</li>
//                 <li>Bake for about 30-40 minutes</li>
//                 <li>Let it cool and enjoy!</li>
//               </ol>
//             </div>
//           </div>
//         </Accordion.Body>
//       </Accordion.Item>
//       <Accordion.Item eventKey='4'>
//         <Accordion.Header>Chocolate Chip Cookies</Accordion.Header>
//         <Accordion.Body>
//           <div className="container">
//             <div className="upper-column1">
//               <h5 className="subheader">The best chocolate chip cookies recipe ever</h5>
//               <p className="recipe-description">This is the best chocolate chip cookies recipe ever! No funny ingredients, no chilling time, etc. Just a simple, straightforward, amazingly delicious, doughy yet still fully cooked, chocolate chip cookie that turns out perfectly every single time!</p>
//               <p className="recipe-description">Everyone needs a classic chocolate chip cookie recipe in their repertoire, and this is mine. It is seriously the Best Chocolate Chip Cookie Recipe Ever! I have been making these for many, many years and everyone who tries them agrees they’re out-of-this-world delicious!</p>
//             </div>
//             <div className="upper-column2">
//               <img src={chocchip} alt="Sample Recipe" class="center scaled-image padded-image" />
//             </div>
//           </div>
//           {/* <img src={chocchip} alt="Sample Recipe" class="center scaled-image padded-image" /> */}
//           <div class="container">
//             <div class="column1">
//               <h2 class="subheader">Ingredients</h2>
//               <ul>
//                 <li>3 cups of all purpose flour</li>
//                 <li>1/2 tsp of baking powder</li>
//                 <li>1/4 tsp of salt</li>
//                 <li>1/4 tsp of espresso powder</li>
//                 <li>1 cup of plain white sugar</li>
//                 <li>1 cup of brown sugar or molasses</li>
//                 <li>1 cup of melted butter</li>
//                 <li>2 eggs</li>
//                 <li>1 tsp of vanilla extract</li>
//                 <li>2 cups of chocolate chips/chunks</li>
//               </ul>
//             </div>
//             <div class="column2">
//               <h2 class="subheader">Cooking Instructions</h2>
//               <ol>
//                 <li>Preheat the oven to 350°C degrees, or you can start preheating after step 7, depends on your pace</li>
//                 <li>If you haven’t already, prepare the melted butter by either melting it at a low heat in a pan on stove or melting it in the microwave</li>
//                 <li>Cream the butter with the white sugar and brown sugar/molasses until both incorporated or about 2 - 3 minutes</li>
//                 <li>Mix the eggs, with egg yolk and white, and the vanilla extract into the wet mixture</li>
//                 <li>In a separate bowl combine and sift the dry ingredients (flour, salt, baking powder, espresso powder)</li>
//                 <li>Gradually add in the dry ingredients into the wet mixture until incorporated</li>
//                 <li>Stir in the chocolate chips until incorporated</li>
//                 <li>While oven is preheating, shape small balls out of the dough and place on a 9 x 13 pan, 16 is usually expected</li>
//                 <li>Once the oven is preheated, bake the cookies until 12 - 15 minutes</li>
//                 <li>Take the cookies out of the oven and let them cool for at least 10 minutes</li>
//                 <li>Enjoy!</li>
//               </ol>
//             </div>
//           </div>
//         </Accordion.Body>
//       </Accordion.Item>
//       <Accordion.Item eventKey='5'>
//         <Accordion.Header>Creole Jambalaya</Accordion.Header>
//         <Accordion.Body>
//           <div className="container">
//             <div className="upper-column1">
//               <h5 className="subheader">What is Creole Jambalaya?</h5>
//               <p className="recipe-description">Creole Jambalaya is a vibrant and flavorful one-pot dish that hails from the Louisiana Creole and Cajun culinary traditions. This hearty and satisfying dish is a celebration of diverse flavors, combining a mix of proteins, aromatic vegetables, and a medley of spices.</p>
//               <p className="recipe-description">Whether enjoyed during festive gatherings, family meals, or Mardi Gras celebrations, Creole Jambalaya embodies the lively spirit of Louisiana cuisine. Its bold flavors and diverse ingredients make it a culinary delight that captures the essence of Creole cooking.</p>
//             </div>
//             <div className="upper-column2">
//               <img src={jambalaya} alt="Sample Recipe" className="center scaled-image padded-image" />
//             </div>
//           </div>
//           {/* <img src={jambalaya} alt="Sample Recipe" className="center scaled-image padded-image" /> */}
//           <div className="container">
//             <div className="column1">
//               <h2 className="subheader">Ingredients</h2>
//               <ul>
//                 <li>1 tablespoon extra-virgin olive oil</li>
//                 <li>1 yellow onion, chopped</li>
//                 <li>2 bell peppers, seeds and ribs removed, chopped</li>
//                 <li>2 sticks celery, chopped</li>
//                 <li>Kosher salt and ground black pepper</li>
//                 <li>1 lb. boneless chicken thigh, cut into "1 pieces</li>
//                 <li>1 tsp. dried oregano</li>
//                 <li>12 oz. andouille sausage</li>
//                 <li>2 tbsp. tomato paste</li>
//                 <li>2 cloves garlic, minced</li>
//                 <li>1 can crushed tomatoes, or 5-6 chopped fresh tomatoes</li>
//                 <li>2 cups long-grain rice</li>
//                 <li>2 cups chicken stock</li>
//                 <li>2 tsp Cajun seasoning</li>
//                 <li>1 lb. medium shrimp, peeled and deveined</li>
//                 <li>2 scallions, thinly sliced</li>
//               </ul>
//             </div>
//             <div className="column2">
//               <h2 className="subheader">Cooking Instructions</h2>
//               <p>Recipe modified from <a href="https://www.delish.com/cooking/recipe-ideas/a53820/easy-homemade-cajun-jambalaya-recipe/">delish.com</a></p>
//               <p>Note: The pot must be large enough to hold all of the ingredients at once.</p>
//               <h4>Optional Steps</h4>
//               <ul>
//                 <li>For extra seafood flavor: Shell and devein shrimp, then brown the shrimp in vegetable oil at medium high heat and set aside for later.</li>
//                 <li>In a separate pot, simmer the shells in the stock for ~1 hour beforehand. Strain out the shells and use the broth as normal.</li>
//                 <li>For softer rice, lightly sautee in 1 1/2 tbsp butter until golden, then add stock and other ingredients separately</li>
//               </ul>
//               <h4>Main Process</h4>
//               <ul>
//                 <li>In a large pot over medium heat, heat oil. Add onion, bell peppers, and celery; season with salt and pepper. </li>
//                 <li>Cook for about 7 minutes, stirring occasionally until softened.</li>
//                 <li>Stir in chicken and oregano, season with salt and pepper. Cook for about 5 minutes or until chicken is golden, stirring occasionally.</li>
//                 <li>Add sausage, tomato paste, and garlic and cook, stirring about 1 minute until fragrant.</li>
//                 <li>Add stock, tomatoes, rice, and <a href="https://www.gimmesomeoven.com/cajun-seasoning/">Cajun seasoning.</a></li>
//                 <li>Reduce heat to medium-low, cover with a tight lid, and cook until rice is tender and liquid is almost absorbed, about 20 minutes.</li>
//                 <li>Add shrimp and cook, tossing to combine, until pink and just cooked through, 3 to 5 minutes. If the shrimp were cooked earlier, cook for 1-2 minutes.</li>
//                 <li>Top with scallions and serve.</li>
//               </ul>
//             </div>
//           </div>
//         </Accordion.Body>
//       </Accordion.Item>
//       <Accordion.Item eventKey='6'>
//         <Accordion.Header>Soup Dumplings</Accordion.Header>
//         <Accordion.Body>
//           <div className="container">
//             <div className="upper-column1">
//               <h5 className="subheader">Xiao Long Bao - Soup Dumplings</h5>
//               <p className="recipe-description">Xiao Long Bao, also known as soup dumplings, is a delectable Chinese dim sum dish renowned for its delicate and savory appeal. These small, steamed dumplings originate from the Jiangnan region of China and are particularly associated with Shanghai.</p>
//               <p className="recipe-description">The magic of Xiao Long Bao lies within its thin, translucent dough that encases a flavorful mixture of minced pork, aromatics, and a rich, savory broth. What sets these dumplings apart is the unique method of incorporating a gelatinized meat broth into the filling, which turns into a luscious, savory soup during the steaming process.</p>
//               <p className="recipe-description">Traditionally served with a side of black vinegar and thin julienned ginger, Xiao Long Bao is not just a dish; it's an experience. The careful balance of flavors, the rich broth surprise, and the artful craftsmanship involved in creating each dumpling make Xiao Long Bao a cherished and globally celebrated culinary delight.</p>
//             </div>
//             <div className="upper-column2">
//               <img src={dumplings} alt="Sample Recipe" className="center scaled-image padded-image" />
//             </div>
//           </div>
//           {/* <img src={dumplings} alt="Sample Recipe" className="center scaled-image padded-image" /> */}
//           <div className="container">
//             <div className="column1">
//               <h2 className="subheader">Ingredients</h2>
//               <h4>Aspic Ingredients</h4>
//               <ul>
//                 <li>1/2 lb pork skin, cut into "1 strips</li>
//                 <li>1 lb pork neck bones, with meat still on</li>
//                 <li>2 slices ginger</li>
//                 <li>1 scallion, cut into 3 pieces</li>
//                 <li>1 tablespoon shaoxing cooking wine</li>
//               </ul>
//               <h4>Dough Ingredients</h4>
//               <ul>
//                 <li>1 cup all-purpose flour</li>
//                 <li>6 tbsp warm water</li>
//               </ul>
//               <h4>Filling</h4>
//               <ul>
//                 <li>1 lb ground pork (70% lean, 30% fat)</li>
//                 <li>2 tablespoon shaoxing cooking wine</li>
//                 <li>3/4 tsp salt</li>
//                 <li>1/2 tsp sesame oil</li>
//                 <li>3/4 tsp sugar</li>
//                 <li>3 tsp light soy sauce</li>
//                 <li>3 tablespoons water</li>
//                 <li>Pinch of ground white pepper</li>
//                 <li>1 tablespoon minced ginger</li>
//                 <li>1 cup of aspic, divided into "1/2 pieces</li>
//               </ul>
//             </div>
//             <div className="column2">
//               <h2>Cooking Instructions</h2>
//               <p>Recipe taken from <a href="https://thewoksoflife.com/steamed-shanghai-soup-dumplings-xiaolongbao/">delish.com</a></p>
//               <h4>Aspic</h4>
//               <ul>
//                 <li>In a small pot, add pork skin/bones and cover with cold water. Bring to a rolling boil, then drain and rinse the bones and skin to remove impurities.</li>
//                 <li>Rinse the pot and readd ingredients, then add 4 cups of water along with the ginger, scallion, and wine.</li>
//                 <li>Bring to a boil and reduce the heat to low, then cover and simmer for 2 hours.</li>
//                 <li>Turn the heat off, allow the soup to cool, and strain the liquid into a bowl. Store or eat the leftover ingredients.</li>
//                 <li>Once the liquid is completely cooled, cover and refrigerate overnight to make an aspic.</li>
//               </ul>
//               <h4>Dough</h4>
//               <ul>
//                 <li>In a mixing bowl, add the flour and warm water 1 tablespoon at a time.</li>
//                 <li>Work and knead the dough for 15-20 minutes. The dough should be very soft and smooth.</li>
//                 <li>Cover with a cloth and let it rest for 30 minutes.</li>
//               </ul>
//               <h4>Filling</h4>
//               <ul>
//                 <li>Take your ground pork and put it in the food processor. Pulse for 30-60 seconds until the pork resembles paste.</li>
//                 <li>In a mixing bowl, add the pork and all the rest of the ingredients except the aspic.</li>
//                 <li>Whip ingredients together with chopsticks thoroughly for 2 minutes, until everything is well combined into a light paste.</li>
//                 <li>Gently fold in the aspic without overmixing, then cover and refrigerate until ready.</li>
//                 <li>If you're ready now, put the bowl in the freezer for 15 minutes to make the filling firmer and easier to work with.</li>
//               </ul>
//               <h4>Assembly</h4>
//               <ul>
//                 <li>Lightly dust a clean work surface with flour and roll the dough into a long cylinder/cigar, about an inch in diameter.</li>
//                 <li>Cut the dough into small equal pieces weighing about 11 grams each (the dough chunks should be a size resembling that of gnocchi).</li>
//                 <li>Roll out each piece into a round disc about 3 – 3 ¼ inches diameter. Keep everything under a damp cloth.</li>
//                 <li>Line a bamboo steamer with a cheese cloth and take out the filling.</li>
//                 <li>Place about 1 tbsp of filling into the dumpling skin and pleat with as many folds as possible, ideally 12-18.</li>
//                 <li>During each fold, use one hand to pleat the dough over itself and the other to continually push the filling into the "bag" in the dough</li>
//                 <li>Place the buns in the steamer, about 1 1/2 inch apart</li>
//                 <li>Fill the lower part of a metal steamer pot with water and boil.</li>
//                 <li>Put the bamboo steamer in the top part, cover with the bamboo steamer lid, and steam over high heat for 8 minutes.</li>
//                 <li>To eat, place the dumpling in a soup spoon and handle with chopsticks in the other hand.</li>
//               </ul>
//             </div>
//           </div>
//         </Accordion.Body>
//       </Accordion.Item>
//     </Accordion>
//   )
// }
// export default RecipeAccordion;
