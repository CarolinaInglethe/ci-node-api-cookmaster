const { ObjectId } = require('mongodb');
const connection = require('./connection');

module.exports = async (id, image) => {
    if (!ObjectId.isValid(id)) return null;

    const recipes = await connection()
      .then((db) => db.collection('recipes'));
  
    const { insertedId } = await recipes.updateOne(
        { _id: ObjectId(id) },
        { $set: { image } },
    ); 

    return insertedId;
};