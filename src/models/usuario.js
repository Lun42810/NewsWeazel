const mongoose = require("mongoose"); // importando el componente mogoose
const usuarioSchema = mongoose.Schema({
  usuario: {
    type: String,
    required: true,
    unique: true,
  },
  contraseña: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Usuario", usuarioSchema);