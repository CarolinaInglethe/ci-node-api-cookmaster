const modelsFindEmailUser = require('../models/findEmailUser');
const authService = require('./utils/authService');

module.exports = async (emailLogin, passwordLogin) => {
  if (!emailLogin || !passwordLogin) {
    return { message: 'All fields must be filled' };
  }

  // procura por email no banco e retorna objeto inteiro:
  const existEmailUser = await modelsFindEmailUser(emailLogin);
  
  // valida se email existe ou senha seja diferente:
  if (!existEmailUser || passwordLogin !== existEmailUser.password) {
    return { message: 'Incorrect username or password' };
  }

  const { _id, email, role } = existEmailUser;

  // gera token para autenticação caso os dados coincidem:
  const token = authService.generateToken({ id: _id, email, role });

  return { token };
};