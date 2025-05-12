const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nombreUsuario: {
    type: String,
    required: true,
    unique: true,
    trim: true 
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /.+\@.+\..+/
  },
  contraseña: {
    type: String,
    required: true
  },
  rol: {
    type: String,
    enum: ['usuario', 'autor', 'editor', 'revisor'],
    default: 'usuario'
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
