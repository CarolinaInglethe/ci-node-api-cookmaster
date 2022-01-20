const modelsUpdateRecipeWithImage = require('../models/updateRecipeWithImage');
const modelsGetRecipeById = require('../models/getRecipeById');

module.exports = async (id, filename) => {
  const imagePath = `localhost:3000/src/uploads/${filename}`;

  const getRecipeById = await modelsGetRecipeById(id);
 
  await modelsUpdateRecipeWithImage(id, imagePath);

  return {
    ...getRecipeById,
    image: imagePath,
  };
};