const app = require('./app');
require('dotenv').config();

// --------

const controllersCreateUser = require('./controllers/createUser');
const controllersLogin = require('./controllers/login');
const controllersCreateRecipe = require('./controllers/createRecipe');
const auth = require('./middlewares/auth');

app.post('/users', controllersCreateUser);
app.post('/login', controllersLogin);
app.post('/recipes', auth, controllersCreateRecipe);

// ---------

const PORT = 3000;

app.listen(PORT, () => console.log(`conectado na porta ${PORT}`));
