const { Schema, model, Types } = require('mongoose');

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        //must match a valid email address (look into Mongoose's matching validation)
    },
    thoughts: {
      //array of _id values referencing the Thought model
    },
    friends: {
      //array of _id values referencing the User model (self-reference)
    },
  }
);

//Schema Settings:
//create a virtual called friendCount that retrieves the length of the user's friends array field on query.
UserSchema.virtual('friendCount').get(function() {
  // return this.friends.length(this.friends.length + 1);
  return "asdf"
});

// create the User model using the UserSchema
const User = model('User', UserSchema);

// export the User model
module.exports = User;


//VIRTUAL EXAMPLE:
// // Create a virtual property `domain` that's computed from `email`.
// userSchema.virtual('domain').get(function() {
//   return this.email.slice(this.email.indexOf('@') + 1);
// });
// const User = mongoose.model('User', userSchema);

// let doc = await User.create({ email: 'test@gmail.com' });
// // `domain` is now a property on User documents.
// doc.domain; // 'gmail.com'