const connection = require('./connection');

module.exports = async () => {
    const recipesCollection = await connection()
      .then((db) => db.collection('recipes'));
  
    const FindRecipes = await recipesCollection.find({}).toArray();
  
    return FindRecipes;
};