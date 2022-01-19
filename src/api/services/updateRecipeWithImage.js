const modelsUpdateRecipeWithImage = require('../models/updateRecipeWithImage');
const authService = require('./utils/authService');
const modelsGetRecipeById = require('../models/getRecipeById');

module.exports = async (id, imagePath, token) => {
  const tokenInfoUser = await authService.verifyToken(token);

  if (!tokenInfoUser.id) return { message: 'missing auth token' };

  // busca receita pelo id e pega o userId dela:
  const getRecipeById = await modelsGetRecipeById(id);
  if (!getRecipeById) return { message: 'recipe not found' };
  const { userId } = getRecipeById;

  // (se ele nao for admin ou nao for author da receita ele 
  // não pode editar) 
  // verifica role admin , ou se id é mesmo que userId da receita:
  if (tokenInfoUser.role !== 'admin' || tokenInfoUser.id !== userId) {
    return { message: 'invalid user' };
  }
  
  // atualiza receita com a imagem apos verificaçoes com sucesso:
  await modelsUpdateRecipeWithImage(id, imagePath);

  return { ...getRecipeById, image: imagePath };
};