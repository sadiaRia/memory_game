const Cardontroller = require("../../card");

module.exports = app => {
  app.get("/getcards", Cardontroller.getCards);
};
