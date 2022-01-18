const jwt = require('jsonwebtoken');

const mySecret = 'sfsgsdgdfgolmolz';
const jwtConfig = {
    expiresIn: '6d',
    algorithm: 'HS256',
};

// funçao gera token apaertir de login do usuario:
const generateToken = (infoUser) => jwt.sign({ infoUser }, mySecret, jwtConfig);

// funcao verifica token de usuario e utiliza informaçao decodificada(id):
const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, mySecret);

    return decoded.infoUser;
  } catch (err) {
    console.log('Falha na verificação');
    return null;
  }
};

module.exports = {
  generateToken,
  verifyToken,
};