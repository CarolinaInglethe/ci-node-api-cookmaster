const connection = require('./connection');

module.exports = async (data) => {
    const Users = await connection()
      .then((db) => db.collection('users'));
  
    const { insertedId: _id } = await Users
    .insertOne({ name: data.name, email: data.email, role: 'user' });
  
    return { user: { _id, ...data } };
  };