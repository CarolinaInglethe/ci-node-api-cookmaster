const app = require('./app');
require('dotenv').config();

// --------

const controllersCreateUser = require('./controllers/createUser');
const controllersLogin = require('./controllers/login');

app.post('/users', controllersCreateUser);
app.post('/login', controllersLogin);

// ---------

const PORT = 3000;

app.listen(PORT, () => console.log(`conectado na porta ${PORT}`));
