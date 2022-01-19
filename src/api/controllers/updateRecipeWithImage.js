const servicesUpdateRecipeWithImage = require('../services/updateRecipeWithImage');

module.exports = async (req, res, _next) => {
    try {
      const { id } = req.params;
      const { image } = req;
      const { authorization } = req.headers;
    
      const updateRecipeWithImage = await servicesUpdateRecipeWithImage(
        id, image, authorization,
      );
    
      // if (updateRecipeWithImage.message) {
      //   return res.status(404).json(updateRecipeWithImage);
      // }
    
      return res.status(200).json(updateRecipeWithImage);
    } catch (err) {
      return res.status(500).json({ message: 'Erro interno do servidor' });
    }
};