const { ObjectId } = require('mongodb');
const connection = require('./connection');

module.exports = async (data, id) => {
    if (!ObjectId.isValid(id)) return null;

    const { name, ingredients, preparation } = data;

    const recipes = await connection()
      .then((db) => db.collection('recipes'));
  
    const updateRecipe = await recipes.updateOne(
        { _id: ObjectId(id) },
        { $set: { name, ingredients, preparation } },
    );

    if (!updateRecipe) return null;

    return { _id: id, name, ingredients, preparation };
};