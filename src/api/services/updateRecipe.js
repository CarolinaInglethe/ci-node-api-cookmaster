const modelsUpdateRecipe = require('../models/updateRecipe');
const authService = require('./utils/authService');

module.exports = async (data, id, token) => {
  const tokenInfoUser = await authService.verifyToken(token);

  const updateRecipe = await modelsUpdateRecipe(data, id);

  return { ...updateRecipe, userId: tokenInfoUser.id };
};