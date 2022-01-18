const connection = require('./connection');

module.exports = async (data, user) => {
    const { name, ingredients, preparation } = data;
    const { _id } = user;
    const userId = _id;

    const recipes = await connection()
      .then((db) => db.collection('recipes'));
  
    const recipeCreated = await recipes
    .insertOne({ name, ingredients, preparation, userId: _id });
  
    console.log(recipeCreated);
    return { recipe: { name, ingredients, preparation, userId } };
};