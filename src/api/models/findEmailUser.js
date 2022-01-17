const connection = require('./connection');

module.exports = async (email) => {
  const existEmail = await connection()
  .then((db) => db.collection('users').findOne({ email }));

  if (!existEmail) return null;

  return existEmail;
};