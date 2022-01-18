const { ObjectId } = require('mongodb');
const connection = require('./connection');

module.exports = async (data, id) => {
    if (!ObjectId.isValid(id)) return null;

    const { name, ingredients, preparation } = data;

    await connection().collection('recipes')
    .updateOne(
        { _id: ObjectId(id) },
        { $set: { name, ingredients, preparation } },
    );

    return { _id: id, name, ingredients, preparation };
};