const servicesUpdateRecipe = require('../services/updateRecipe');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    
    const updateRecipe = await servicesUpdateRecipe(req.body, id);

    if (updateRecipe.message) {
      return res.status(404).json(updateRecipe);
    }

    return res.status(200).json(updateRecipe);
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno do servidor' });
  }
};