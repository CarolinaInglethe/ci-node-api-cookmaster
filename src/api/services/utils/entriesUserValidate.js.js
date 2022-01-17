module.exports = (data) => {
  if (!data.name || !data.email || !data.password) {
    return false;
  }

  const validEmail = /\S+@\S+\.\S+/;
  if (!validEmail.test(data.email)) {
    return false;
  }

  return true;
};
