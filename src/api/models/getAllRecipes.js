const connection = require('./connection');

module.exports = async () => {
    const recipes = await connection()
      .then((db) => db.collection('recipes'));
  
    const FindRecipes = await recipes.find({});
  
    return FindRecipes;
};