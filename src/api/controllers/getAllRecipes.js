const servicesGetAllRecipes = require('../services/getAllRecipes');

module.exports = async (req, res) => {
  try {
    const getAllRecipes = await servicesGetAllRecipes();

    if (getAllRecipes.message) {
      return res.status(401).json(getAllRecipes);
    }

    return res.status(200).json(getAllRecipes);
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno do servidor' });
  }
};