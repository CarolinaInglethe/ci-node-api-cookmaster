const modelsGetAllRecipes = require('../models/getAllRecipes');

module.exports = async () => {
    const getAllRecipes = await modelsGetAllRecipes();

  if (!getAllRecipes) {
    return { message: 'not found recipes' };
  }

  return getAllRecipes;
};