
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const operatorSchema = new mongoose.Schema({
  operatorId: { type: String, required: true, unique: true, index: true },
  passwordHash: { type: String, required: true },
  roles: [String],
  createdAt: { type: Date, default: Date.now }
});

// Middleware para hashear a senha antes de salvar
operatorSchema.pre('save', async function(next) {
  if (!this.isModified('passwordHash')) return next();
  this.passwordHash = await bcrypt.hash(this.passwordHash, 12);
  next();
});

operatorSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.passwordHash);
};


module.exports = mongoose.model('Operator', operatorSchema);
