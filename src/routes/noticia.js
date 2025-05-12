const express = require("express");
const router = express.Router(); // Manejador de rutas de Express
const Noticia = require("../models/Noticia"); 

// Crear una nueva noticia
router.post("/noticia", (req, res) => {
    const noticia = new Noticia(req.body); 
    noticia
        .save() 
        .then((data) => res.json(data)) 
        .catch((error) => res.status(500).json({ message: error.message })); 
});
