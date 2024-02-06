import jambalaya from '../../img/food/jambalaya.jpg';
import '../../App.css';
import React from 'react';
export default function Jambalaya() {
    return (
    <div>
      <h1>Creole Jambalaya</h1>
      <div className="container">
            <div className="upper-column1">
              <h5 className="subheader">What is Creole Jambalaya?</h5>
              <p className="recipe-description">Creole Jambalaya is a vibrant and flavorful one-pot dish that hails from the Louisiana Creole and Cajun culinary traditions. This hearty and satisfying dish is a celebration of diverse flavors, combining a mix of proteins, aromatic vegetables, and a medley of spices.</p>
              <p className="recipe-description">Whether enjoyed during festive gatherings, family meals, or Mardi Gras celebrations, Creole Jambalaya embodies the lively spirit of Louisiana cuisine. Its bold flavors and diverse ingredients make it a culinary delight that captures the essence of Creole cooking.</p>
            </div>
            <div className="upper-column2">
              <img src={jambalaya} alt="Sample Recipe" className="center scaled-image padded-image" />
            </div>
          </div>
          {/* <img src={jambalaya} alt="Sample Recipe" className="center scaled-image padded-image" /> */}
          <div className="container">
            <div className="column1">
              <h2 className="subheader">Ingredients</h2>
              <ul>
                <li>1 tablespoon extra-virgin olive oil</li>
                <li>1 yellow onion, chopped</li>
                <li>2 bell peppers, seeds and ribs removed, chopped</li>
                <li>2 sticks celery, chopped</li>
                <li>Kosher salt and ground black pepper</li>
                <li>1 lb. boneless chicken thigh, cut into "1 pieces</li>
                <li>1 tsp. dried oregano</li>
                <li>12 oz. andouille sausage</li>
                <li>2 tbsp. tomato paste</li>
                <li>2 cloves garlic, minced</li>
                <li>1 can crushed tomatoes, or 5-6 chopped fresh tomatoes</li>
                <li>2 cups long-grain rice</li>
                <li>2 cups chicken stock</li>
                <li>2 tsp Cajun seasoning</li>
                <li>1 lb. medium shrimp, peeled and deveined</li>
                <li>2 scallions, thinly sliced</li>
              </ul>
            </div>
            <div className="column2">
              <h2 className="subheader">Cooking Instructions</h2>
              <p>Recipe modified from <a href="https://www.delish.com/cooking/recipe-ideas/a53820/easy-homemade-cajun-jambalaya-recipe/">delish.com</a></p>
              <p>Note: The pot must be large enough to hold all of the ingredients at once.</p>
              <h4>Optional Steps</h4>
              <ul>
                <li>For extra seafood flavor: Shell and devein shrimp, then brown the shrimp in vegetable oil at medium high heat and set aside for later.</li>
                <li>In a separate pot, simmer the shells in the stock for ~1 hour beforehand. Strain out the shells and use the broth as normal.</li>
                <li>For softer rice, lightly sautee in 1 1/2 tbsp butter until golden, then add stock and other ingredients separately</li>
              </ul>
              <h4>Main Process</h4>
              <ul>
                <li>In a large pot over medium heat, heat oil. Add onion, bell peppers, and celery; season with salt and pepper. </li>
                <li>Cook for about 7 minutes, stirring occasionally until softened.</li>
                <li>Stir in chicken and oregano, season with salt and pepper. Cook for about 5 minutes or until chicken is golden, stirring occasionally.</li>
                <li>Add sausage, tomato paste, and garlic and cook, stirring about 1 minute until fragrant.</li>
                <li>Add stock, tomatoes, rice, and <a href="https://www.gimmesomeoven.com/cajun-seasoning/">Cajun seasoning.</a></li>
                <li>Reduce heat to medium-low, cover with a tight lid, and cook until rice is tender and liquid is almost absorbed, about 20 minutes.</li>
                <li>Add shrimp and cook, tossing to combine, until pink and just cooked through, 3 to 5 minutes. If the shrimp were cooked earlier, cook for 1-2 minutes.</li>
                <li>Top with scallions and serve.</li>
              </ul>
            </div>
          </div>
  </div>
)};