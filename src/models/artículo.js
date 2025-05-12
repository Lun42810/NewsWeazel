const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  abstract: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: String,
    enum: ['en revisión', 'aprobado', 'rechazado'],
    default: 'en revisión'
  },
  accessType: {
    type: String,
    enum: ['libre', 'pago'],
    default: 'libre'
  }
}, { timestamps: true });

module.exports = mongoose.model('Article', articleSchema);
