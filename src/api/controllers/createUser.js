const servicesCreateUser = require('../services/createUser');

module.exports = async (req, res) => {
  try {
    const createdUser = await servicesCreateUser(req.body);

    // caso de erro no email existente ele tera status 409:
    if (createdUser.status) {
      return res.status(createdUser.status)
      .json({ message: createdUser.message });
    }

    if (createdUser.message) {
      return res.status(400).json(createdUser); 
    }

    return res.status(201).json(createdUser);
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno do servidor' });
  }
};