const validateEntriesUser = (data) => {
  if (!data.name || !data.email || !data.password) {
    return null;
  }

  const validEmail = /\S+@\S+\.\S+/;
  if (!validEmail.test(data.email)) {
    return null;
  }

  return true;
};

module.exports = [
  validateEntriesUser,
];
