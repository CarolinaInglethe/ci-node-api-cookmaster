const modelsUpdateRecipeWithImage = require('../models/updateRecipeWithImage');
const authService = require('./utils/authService');

module.exports = async (id, image, token) => {
  const tokenInfoUser = await authService.verifyToken(token);

  const updateRecipeWithImage = await modelsUpdateRecipeWithImage(id, image);

  return { ...updateRecipeWithImage, userId: tokenInfoUser.id };
};