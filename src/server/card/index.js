const _ = require('lodash'),
  cardList = require('../config/constants/card');

getCards = (req, res) => {
  let cards = cardList.cards.concat(cardList.cards);
  return res.status(200).send(_.shuffle(cards));
}

module.exports = {
  getCards
}