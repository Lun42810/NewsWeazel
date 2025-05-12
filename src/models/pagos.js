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
    required: true,
    validate: {
      validator: function(value) {
        return !(value === 'efectivo' && this.monto > 100000);
      },
      message: 'El pago en efectivo no puede superar los $100.000'
    }
  }
}, { timestamps: true });

pagoSchema.methods.procesarPago = function() {
  console.log(`Procesando pago de $${this.monto} mediante ${this.metodoPago}.`);
  return true;
};

module.exports = mongoose.model('Payment', pagoSchema);

