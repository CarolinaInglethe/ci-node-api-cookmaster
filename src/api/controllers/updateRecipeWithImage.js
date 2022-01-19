const servicesUpdateRecipeWithImage = require('../services/updateRecipeWithImage');

module.exports = async (req, res, _next) => {
    try {
      const { id } = req.params;
      const { authorization } = req.headers;

      const imagePath = `localhost:3000/src/uploads/${id}.jpeg`;
    
      const updateRecipeWithImage = await servicesUpdateRecipeWithImage(
        id, imagePath, authorization,
      );

      if (updateRecipeWithImage.message) {
        return res.status(401).json(updateRecipeWithImage); 
      }

      return res.status(200).json(updateRecipeWithImage);
    } catch (err) {
      return res.status(500).json({ message: 'Erro interno do servidor' });
    }
};