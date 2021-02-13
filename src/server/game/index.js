const _ = require('lodash')
Game = require('./game');

create = async (req, res) => {
  let game = await Game.create(req.body).catch((err) => {
    return res.status(400).send('Failed to create records');
  });;
  return res.status(200).send(game);
}

module.exports = {
  create
}