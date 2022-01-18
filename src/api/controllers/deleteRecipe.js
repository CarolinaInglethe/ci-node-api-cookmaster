const servicesDeleteRecipe = require('../services/deleteRecipe');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const { authorization } = req.headers;
    
    await servicesDeleteRecipe(id, authorization);

    return res.status(204).send('Recipe deleted');
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno do servidor' });
  }
};