const connection = require('./connection');

module.exports = async (data, id) => {
    const { name, ingredients, preparation } = data;

    const recipes = await connection()
      .then((db) => db.collection('recipes'));
  
    const { insertedId } = await recipes
    .insertOne({ name, ingredients, preparation, userId: id });
  
    return { recipe: { name, ingredients, preparation, userId: id, _id: insertedId } };
};