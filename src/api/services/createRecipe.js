const modelsCreateRecipe = require('../models/createRecipe');

module.exports = async (data, user) => {
  if (!data.name || !data.ingredients || !data.preparation) {
    return { message: 'Invalid entries. Try again.' };
  }

  const createdRecipe = await modelsCreateRecipe(data, user);

  return createdRecipe;
};