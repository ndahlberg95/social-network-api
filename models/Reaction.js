const { ObjectID } = require('bson');
const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema(
  {
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    },
  }
);

//This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model.

// create the Reaction model using the ReactionSchema
const Reaction = model('Reaction', ReactionSchema);

// export the Reaction model
module.exports = Reaction;