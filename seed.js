const User = require('./models/User');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network-api', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Use this to log mongo queries being executed!
mongoose.set('debug', true);

User.find().then(
    resp => console.log(resp)
)

User.create({ username: 'myusername', email: 'myemail@email.com'})