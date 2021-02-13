const _ = require('lodash')
User = require('./user');


_isUserExist = async (email) => {
  const user = User.findOne({ email: email }).catch((err) => {
    return {};
  });
  return user
}

create = async (req, res) => {
  const email = req.body.email;
  const _existingUser = await _isUserExist(email);
  if (!_.isEmpty(_existingUser)) { return res.status(200).send(_existingUser); }
  let newUser = await User.create(req.body).catch((err) => {
    return res.status(400).send('Failed to create user');
  });;
  return res.status(200).send(newUser);
}

module.exports = {
  create
}