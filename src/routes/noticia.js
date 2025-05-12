const express = require("express");
const router = express.Router(); // Manejador de rutas de Express
const Noticia = require("../models/Noticia"); 


router.get('/categoria/:categoriaId', async (req, res) => {
    const { categoriaId } = req.params;
    try {
        const noticias = await Noticia.find({ categoria: categoriaId }).populate('categoria'); 
        if (noticias.length === 0) {
            return res.status(404).json({ error: 'No se encontraron noticias para esta categoría' }); 
        }
        res.json(noticias); 
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener noticias por categoría' }); 
    }
});

module.exports = router; 