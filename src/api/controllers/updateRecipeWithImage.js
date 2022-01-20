const servicesUpdateRecipeWithImage = require('../services/updateRecipeWithImage');

module.exports = async (req, res, _next) => {
    try {
      const { id } = req.params;
      const { filename } = req.file;

      const addImageRecipe = await servicesUpdateRecipeWithImage(
        id, filename,
      );

      return res.status(200).json(addImageRecipe);
    } catch (err) {
      return res.status(500).json({ message: 'Erro interno do servidor' });
    }
}; 