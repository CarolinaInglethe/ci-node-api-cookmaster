const servicesCreateRecipe = require('../services/createRecipe');

module.exports = async (req, res) => {
    try {
      const data = req.body;
      const { id } = req; // id do usuario pego na autenticaçao 
      const createRecipe = await servicesCreateRecipe(data, id);
  
      if (createRecipe.message) {
        return res.status(400).json(createRecipe);
      }
  
      return res.status(201).json(createRecipe);
    } catch (err) {
      return res.status(500).json({ message: 'Erro interno do servidor' });
    }
  };