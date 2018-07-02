const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  passwordConf: {
    type: String,
    required: true,
  },
  verified: {
    type: Boolean,
    default: true
},
}, {
    timestamps: true
  });
UserSchema.pre('save', function (next) { 
  var user = this;
  bcrypt.hash(user.password, 10, function (err, hash) {
    if (err) {
      return next(err);
    }
    user.password = hash;
    user.passwordConf = hash;
    next()
  })
  
});
module.exports = mongoose.model('User', UserSchema);