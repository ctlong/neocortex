const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const RelationshipTypeSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  name: String
}, {timestamps: true});

module.exports = mongoose.model('RelationshipType', RelationshipTypeSchema);
