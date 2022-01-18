const modelsUpdateRecipe = require('../models/createRecipe');

module.exports = async (data, id) => {
  const updateRecipe = await modelsUpdateRecipe(data, id);

  if (!updateRecipe) {
    return { message: 'Not found recipe' };
  }

  return updateRecipe;
};