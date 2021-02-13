const mongoose = require('mongoose'),
  Plugins = require('../utils/plugins').Plugins,
  Schema = mongoose.Schema;

let UserSchema = new Schema({
  name: { type: String },
  email: { type: String },
  createdAt: { type: Date, default: Date.now() },
  deleted: { type: Boolean, default: false },
});

UserSchema.plugin(Plugins.documentDeleted);

// Export the model
const User = mongoose.model('User', UserSchema);
module.exports = User;
