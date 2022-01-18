const servicesDeleteRecipe = require('../services/deleteRecipe');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const { authorization } = req.headers;
    
    const deleteRecipe = await servicesDeleteRecipe(id, authorization);

    if (!deleteRecipe) return res.status(400).json('err');

    return res.status(204);
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno do servidor' });
  }
};