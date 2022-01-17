const app = require('./app');
require('dotenv').config();

// --------

const controllersCreateUser = require('./controllers/createUser');

app.post('/users', controllersCreateUser);

// ---------

const PORT = 3000;

app.listen(PORT, () => console.log(`conectado na porta ${PORT}`));
