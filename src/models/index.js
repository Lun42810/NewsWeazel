const mongoose = require('mongoose');
const User = require('./Usuario');
const Pago = require('./Pago');

async function main() {
  await mongoose.connect('mongodb://localhost:27017/newsweazel');

  const nuevoUsuario = new User({
    nombreUsuario: 'diegoL',
    email: 'diego@email.com',
    contraseña: '123456',
    rol: 'editor'
  });

  await nuevoUsuario.save();

  await nuevoUsuario.actualizarPerfil('dieguitoL', 'nuevo@email.com');

  const esEditor = nuevoUsuario.tieneRol('editor');
  console.log('¿Es editor?', esEditor);

  const nuevoPago = new Pago({
    idPago: 'P001',
    monto: 25000,
    metodoPago: 'tarjeta'
  });

  await nuevoPago.save();

  nuevoPago.procesarPago();

  await mongoose.disconnect();
}

if (require.main === module) {
  main().catch(err => console.error(err));
}

module.exports = {
  User,
  Payment: Pago
};

  