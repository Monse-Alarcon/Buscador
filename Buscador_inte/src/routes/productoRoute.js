
const express = require('express');
const { poblarProductos, buscarProductos,  obtenerProductos} = require('../controllers/externalController');
const router = express.Router();

router.post('/poblar', poblarProductos);

router.get('/', obtenerProductos);

router.get('/search', buscarProductos);



module.exports = router;