const app = require('./app');
require('dotenv').config();

// --------

const controllersCreateUser = require('./controllers/createUser');
const controllersLogin = require('./controllers/login');
const controllersCreateRecipe = require('./controllers/createRecipe');
const controllersGetAllRecipes = require('./controllers/getAllRecipes');
const auth = require('./middlewares/auth');

// requesito 1:
app.post('/users', controllersCreateUser);
// requesito 2 :
app.post('/login', controllersLogin);
// requesito 3:
app.post('/recipes', auth, controllersCreateRecipe);

// requesito 4:
app.get('/recipes', controllersGetAllRecipes);

// ---------

const PORT = 3000;

app.listen(PORT, () => console.log(`conectado na porta ${PORT}`));
