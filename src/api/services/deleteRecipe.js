const modelsDeleteRecipe = require('../models/deleteRecipe');
// const authService = require('./utils/authService');

module.exports = async (id) => {
//   const tokenInfoUser = await authService.verifyToken(token);

//   if (!tokenInfoUser.id) return ;

  const deleteRecipe = await modelsDeleteRecipe(id);

  return deleteRecipe;
};