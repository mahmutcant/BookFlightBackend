const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const FlightSchema = new mongoose.Schema({
  flightDirection: { type: String, required: true },
  prefixICAO: { type: String, required: true },
  scheduleTime: { type: String, required: true },
  route: { type: Object, required: true },
});

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  flights: [FlightSchema],
});

UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.methods.matchPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);