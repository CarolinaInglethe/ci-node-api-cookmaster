const modelsUpdateRecipe = require('../models/updateRecipe');

module.exports = async (data, id) => {
  const updateRecipe = await modelsUpdateRecipe(data, id);

  return updateRecipe;
};