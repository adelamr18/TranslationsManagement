const mongosoe = require("mongoose");

const postSchema =   mongosoe.Schema({
  source: { type: String, required: false },
  target: { type: String, required: false}
});

module.exports = mongosoe.model('Translation',postSchema);
