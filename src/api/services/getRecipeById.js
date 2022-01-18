const modelsGetRecipeById = require('../models/getRecipeById');

module.exports = async (id) => {
    const recipeById = await modelsGetRecipeById(id);

  if (!recipeById) {
    return { message: 'recipe not found' };
  }

  return recipeById;
};