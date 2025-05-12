const express = require("express");
const router = express.Router(); // manejador de rutas de express
const categoriaSchema = require("../models/categoria");


router.post("/categoria", (req, res) => {
    const categoria = new categoriaSchema(req.body);
    categoria
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json({ message: error.message }));
});

module.exports = router;