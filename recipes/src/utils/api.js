const CosmosAccess = require('./CosmosAccess');

// function to fetch a recipe by its ID
async function getRecipeById(recipeId) {
  try {
    const recipe = await CosmosAccess.get_by_recipe_id(recipeId);
    return recipe;
  } catch (error) {
    console.error('Error fetching recipe by ID:', error);
    throw error; // rethrow the error for handling in the calling code
  }
}

module.exports = { getRecipeById };
