const mongoose = require('mongoose'),
  Plugins = require('../utils/plugins').Plugins,
  Schema = mongoose.Schema;

let GameSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  noOfMoves: { type: Number },
  createdAt: { type: Date, default: Date.now() },
  deleted: { type: Boolean, default: false },
});

GameSchema.plugin(Plugins.documentDeleted);

// Export the model
const Game = mongoose.model('Game', GameSchema);
module.exports = Game;
