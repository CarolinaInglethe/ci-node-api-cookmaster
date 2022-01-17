const connection = require('./connection');

module.exports = async (data) => {
    const { name, email, password } = data;

    const Users = await connection()
      .then((db) => db.collection('users'));
  
    const { insertedId: _id } = await Users
    .insertOne({ name, email, password, role: 'user' });
  
    return { user: { _id, name, email, role: 'user' } };
  };