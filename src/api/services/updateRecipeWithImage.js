const modelsUpdateRecipeWithImage = require('../models/updateRecipeWithImage');
const authService = require('./utils/authService');
const modelsGetRecipeById = require('../models/getRecipeById');

module.exports = async (id, filename, token) => {
  const tokenInfoUser = await authService.verifyToken(token);

  const imagePath = `localhost:3000/src/uploads/${filename}`;

  const getRecipeById = await modelsGetRecipeById(id);
  const { userId } = getRecipeById;

  if (userId !== tokenInfoUser.id && tokenInfoUser.role !== 'admin') {
    return { message: 'missing auth token' };
  }

  await modelsUpdateRecipeWithImage(id, imagePath);

  return {
    ...getRecipeById,
    image: imagePath,
  };
};