const mongoose = require("mongoose"); // importando el componente mogoose
const noticiaSchema = mongoose.Schema({
    categoria: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'categoria',
        required: true, 
    },
}, { timestamps: true });
module.exports = mongoose.model("Noticia", noticiaSchema);
