const CardController = require("../../card");

module.exports = app => {
  app.get("/getcards", CardController.getCards);
};
