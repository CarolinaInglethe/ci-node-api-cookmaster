const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());
// Requesito 10 :
app.use('/images', express.static(path.join(__dirname, '..', '/uploads'))); 
// https://www.youtube.com/watch?v=dghtXs5j__Q

// ----------

// Não remover esse end-point, ele é necessário para o avaliador 
app.get('/', (request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

// --------
const controllersCreateUser = require('./controllers/createUser');
const controllersLogin = require('./controllers/login');
const controllersCreateRecipe = require('./controllers/createRecipe');
const controllersGetAllRecipes = require('./controllers/getAllRecipes');
const controllersGetRecipeById = require('./controllers/getRecipeById');
const controllersUpdateRecipe = require('./controllers/updateRecipe');
const controllersDeleteRecipe = require('./controllers/deleteRecipe');
const controllersUpdateRecipeWithImage = require('./controllers/updateRecipeWithImage');

const auth = require('./middlewares/auth');
const uploadImage = require('./middlewares/uploadImage');

// requesito 1:
app.post('/users', controllersCreateUser);
// requesito 2 :
app.post('/login', controllersLogin);

// requesito 3:
app.post('/recipes', auth, controllersCreateRecipe);
// requesito 4:
app.get('/recipes', controllersGetAllRecipes);
// requesito 5:
app.get('/recipes/:id', controllersGetRecipeById);

// requesito 6 - arquivo /seed.js 

// Requesito 7 :
app.put('/recipes/:id', auth, controllersUpdateRecipe);
// Requesito 8 :
app.delete('/recipes/:id', auth, controllersDeleteRecipe);
// Requesito 9:
app.put('/recipes/:id/image', auth, 
uploadImage.single('image'), controllersUpdateRecipeWithImage);

// ---------

module.exports = app;
