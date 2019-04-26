const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const RelationshipTypeSchema = new Schema({
  name: String
}, {timestamps: true});

module.exports = mongoose.model('RelationshipType', RelationshipTypeSchema);
