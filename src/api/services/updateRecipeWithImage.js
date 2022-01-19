const modelsUpdateRecipeWithImage = require('../models/updateRecipeWithImage');
const authService = require('./utils/authService');
const modelsGetRecipeById = require('../models/getRecipeById');

module.exports = async (id, imagePath, token) => {
  const tokenInfoUser = await authService.verifyToken(token);

  // atualiza receita com a imagem
  await modelsUpdateRecipeWithImage(id, imagePath);

  // busca imagem atualizada pelo id:
  const getRecipeById = await modelsGetRecipeById(id);

  return { ...getRecipeById, userId: tokenInfoUser.id, image: imagePath };
};