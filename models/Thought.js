const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlenth: 1,
      maxlength: 160
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    },
    username: {
      type: String,
      required: true
    },
    reactions: {
      //array of nested documents created with the reactionSchema
    }, 
  }
);

//Schema Settings:
//create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
ThoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length(this.reactions.length + 1);
});

// create the Thought model using the ThoughtSchema
const Thought = model('Thought', ThoughtSchema);

// export the User model
module.exports = Thought;


//VIRTUAL EXAMPLE:
// // Create a virtual property `domain` that's computed from `email`.
// userSchema.virtual('domain').get(function() {
//   return this.email.slice(this.email.indexOf('@') + 1);
// });
// const User = mongoose.model('User', userSchema);

// let doc = await User.create({ email: 'test@gmail.com' });
// // `domain` is now a property on User documents.
// doc.domain; // 'gmail.com'