const authService = require('../services/utils/authService');

module.exports = async (req, res, next) => {
  try {
    const { Authorization } = req.headers;

    if (!Authorization) return res.status(401).json({ message: 'Token não informado' });

    const idUserOfToken = authService.verifyToken(Authorization);

    req.id = idUserOfToken;

    next();
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno na authenticaçao' });
  }
};