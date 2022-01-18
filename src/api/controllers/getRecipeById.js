const servicesGetRecipeById = require('../services/getRecipeById');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;

    const recipeById = await servicesGetRecipeById(id);

    if (recipeById.message) {
      return res.status(404).json(recipeById);
    }

    return res.status(200).json(recipeById);
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno do servidor' });
  }
};