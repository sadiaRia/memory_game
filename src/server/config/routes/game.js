const GameController = require("../../game");

module.exports = app => {
  app.post("/game", GameController.create);
};
