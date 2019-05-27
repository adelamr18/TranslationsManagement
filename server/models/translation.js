const mongoose = require("mongoose");
const mongoosastic = require('mongoosastic');
var Schema = mongoose.Schema;


const PostSchema = new Schema({
  source: String,
  target: String
});
PostSchema.plugin(mongoosastic, {
  hosts: [
    'localhost:9200'
  ]
})
module.exports = mongoose.model('Translation', PostSchema);


