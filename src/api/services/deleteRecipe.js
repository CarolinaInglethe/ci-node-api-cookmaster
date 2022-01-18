const modelsDeleteRecipe = require('../models/deleteRecipe');
const authService = require('./utils/authService');

module.exports = async (id, authorization) => {
  const decodedToken = await authService.verifyToken(authorization);

  const deleteRecipe = await modelsDeleteRecipe(id, decodedToken);

  if (deleteRecipe) return true;
};