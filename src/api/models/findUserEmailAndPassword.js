// usado para o login
const connection = require('./connection');

module.exports = async (eemail, password) => {
  const { _id, email, role } = await connection()
  .then((db) => db.collection('users').findOne({ eemail, password }));

  return { _id, email, role };
};