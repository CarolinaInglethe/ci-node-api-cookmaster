const modelsFindUserEmailAndPassword = require('../models/findUserEmailAndPassword');
const authService = require('./utils/authService');

module.exports = async (email, password) => {
  if (!email || !password) {
    return { message: 'All fields must be filled' };
  }

  // valida login com dados de usuario no banco
  const existEmailAndPassword = await modelsFindUserEmailAndPassword(email, password);
  if (!existEmailAndPassword) {
    return { message: 'Incorret username or password' };
  }

  // gera token para autenticação caso os dados coincidem:
  const token = authService.genToken(existEmailAndPassword);

  return { token };
};