const servicesLogin = require('../services/login');

module.exports = async (req, res, _next) => {
  try {
    const { email, password } = req.body;
    
    const login = await servicesLogin(email, password);
  
    if (login.message) return res.status(401).json(login);
  
    return res.status(200).json(login);
  } catch (e) {
    return res.status(500).json({ message: 'Erro interno' });
  }
};