const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const RelationshipSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  relationshipType: {
    type: Schema.Types.ObjectId,
    ref: 'RelationshipType'
  },
  name: String
}, {timestamps: true});

module.exports = mongoose.model('Relationship', RelationshipSchema);
