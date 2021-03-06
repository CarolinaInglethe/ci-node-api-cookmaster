const { ObjectId } = require('mongodb');
const connection = require('./connection');

module.exports = async (id) => {
    if (!ObjectId.isValid(id)) return null;

    const recipesCollection = await connection()
      .then((db) => db.collection('recipes'));
  
    const recipe = await recipesCollection.findOne(new ObjectId(id));

    return recipe;
};