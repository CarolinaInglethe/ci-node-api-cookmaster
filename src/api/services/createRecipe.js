const modelsCreateRecipe = require('../models/createRecipe');

module.exports = async (data, id) => {
  if (!data.name || !data.ingredients || !data.preparation) {
    return { message: 'Invalid entries. Try again.' };
  }

  const createdRecipe = await modelsCreateRecipe(data, id);

  return createdRecipe;
};