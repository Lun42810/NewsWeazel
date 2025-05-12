const mongoose = require("mongoose"); // importando el componente mogoose
const noticiaSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true,
    },
    autor: {
        type: String,
        required: true,
    },
    fechapublicación: {
        type: Date,
        required: true,
    },
    encabezado: {
        type: String,
        required: true,
    },
    Contenido: {
        type: String,
        required: true,
    }});