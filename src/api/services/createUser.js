const modelsCreateUser = require('../models/createUser');
const validateEntriesUser = require('./utils/createUserValidate.js');
const modelsFindEmailUser = require('../models/findEmailUser');

module.exports = async (data) => {
    const validateEntries = await validateEntriesUser(data);

  if (!validateEntries) {
    return { message: 'Invalid entries. Try again.' };
  }

  const emailExist = await modelsFindEmailUser(data.email);
  if (emailExist) {
    return { message: 'Email already registered' };
  }

  const createUser = await modelsCreateUser(data);

  return createUser;
};