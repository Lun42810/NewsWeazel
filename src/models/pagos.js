const mongoose = require('mongoose');

const pagoSchema = new mongoose.Schema({
  idPago: {
    type: String,
    required: true,
    unique: true
  },
  monto: {
    type: Number,
    required: true,
    min: 1
  },
  fecha: {
    type: Date,
    default: Date.now
  },
  metodoPago: {
    type: String,
    enum: ['tarjeta', 'paypal', 'efectivo'],
    required: true
  }
}, { timestamps: true });

pagoSchema.methods.procesarPago = function() {
  console.log(`Procesando pago de $${this.monto} mediante ${this.metodoPago}.`);
  return true;
};

module.exports = mongoose.model('Pago', pagoSchema);

