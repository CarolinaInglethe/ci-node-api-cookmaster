const servicesUpdateRecipeWithImage = require('../services/updateRecipeWithImage');

module.exports = async (req, res, _next) => {
    try {
      const { id } = req.params;
      // const { image } = req.file;
      const { authorization } = req.headers;

      const imagePath = `localhost:3000/src/uploads/${id}.jpeg`;
    
      const updateRecipeWithImage = await servicesUpdateRecipeWithImage(
        id, imagePath, authorization,
      );

      return res.status(200).json(updateRecipeWithImage);
    } catch (err) {
      return res.status(500).json({ message: 'Erro interno do servidor' });
    }
};