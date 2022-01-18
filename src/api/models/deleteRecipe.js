const { ObjectId } = require('mongodb');
const connection = require('./connection');

module.exports = async (id, infoUser) => {
    if (!ObjectId.isValid(id)) return null;

    const recipes = await connection()
    .then((db) => db.collection('recipes'));
  
    const deleteRecipe = await recipes
    .deleteOne({ _id: ObjectId(id), userId: infoUser.id });

    return deleteRecipe;
};