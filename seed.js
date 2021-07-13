const User = require('./models/User');
const Thought = require('./models/Thought');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network-api', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.set('debug', true);

User.find().then(
    resp => console.log(resp)
)

User.create({ username: 'nora', email: 'nora@email.com'})