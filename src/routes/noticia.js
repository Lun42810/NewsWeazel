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

// Obtener todas las noticias
router.get('/', async (req, res) => {
    try {
        const noticias = await Noticia.find().populate('categoria'); 
        res.json(noticias); 
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener noticias' }); 
    }
});
// Obtener una noticia por ID
router.get('/:id', async (req, res) => {
    try {
        const noticia = await Noticia.findById(req.params.id).populate('categoria'); 
        if (!noticia) {
            return res.status(404).json({ error: 'Noticia no encontrada' }); 
        }
        res.json(noticia); 
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la noticia' }); 
    }
});
// Obtener noticias por categoría
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
