const servicesCreateUser = require('../services/createUser');

module.exports = async (req, res) => {
  try {
    const data = req.body;

    const createdUser = await servicesCreateUser(data);

    if (createdUser.message) {
      return res.status(400).json(createdUser); 
    }

    return res.status(201).json(createdUser);
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno do servidor' });
  }
};