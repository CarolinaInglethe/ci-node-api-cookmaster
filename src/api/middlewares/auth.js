const authService = require('../services/utils/authService');

module.exports = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) return res.status(401).json({ message: 'missing auth token' });

    const UserOfToken = authService.verifyToken(authorization);

    if (!UserOfToken) {
      return res.status(401)
      .json({ message: 'jwt malformed' }); 
    }

    req.user = UserOfToken;

    next();
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno na authenticaçao' });
  }
};