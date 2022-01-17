const jwt = require('jsonwebtoken');

const mySecret = 'sfsgsdgdfgolmolz';
const jwtConfig = {
    expiresIn: '6d',
    algorithm: 'HS256',
};

module.exports = (infoUser) => jwt.sign({ infoUser }, mySecret, jwtConfig);
