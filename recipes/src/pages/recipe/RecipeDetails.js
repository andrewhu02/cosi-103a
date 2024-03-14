import React, { useEffect, useState } from 'react';

// const RecipeDetails = ({ recipes }) => {
//   return (
//     <div>
//       {recipes.map((recipe, index) => (
//         <div key={index}>
//           <h1>{recipe.title}</h1>
//           <p style={{ whiteSpace: 'pre-line' }}>{recipe.recipeText}</p>
//           {/* TODO: Add more styling later */}
//         </div>
//       ))}
//     </div>
//   );
// };

// first, get this page to display all recipes from the API
const AllDetails = () => {
  // store fetched recipes 
  const [recipes, setRecipes] = useState([])
  // GET list of recipes from API
  useEffect(() => {
    fetch('/api/recipes', {method: 'GET'})
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      // set state of recipes here
    });
  }, []);
  // return recipe data
  // TODO: add formatting
  return (
    <div>Check console for data.</div>
  )
}
// then, work on using the FoodData API/parsing recipe details to get ingredient links
export default AllDetails;