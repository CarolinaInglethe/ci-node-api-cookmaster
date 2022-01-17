const jwt = require('jsonwebtoken');

const mySecret = '8~h9~10h';
const jwtConfig = {
    algorithm: 'HS256',
};

const genToken = (infoUser) => {
  const { _id, email, role } = infoUser;
  return jwt.sign({ _id, email, role }, mySecret, jwtConfig);
};

module.exports = [
  genToken,
];