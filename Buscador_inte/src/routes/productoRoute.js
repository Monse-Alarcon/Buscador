
const express = require('express');
const { poblarProductos, buscarProductos, obtenerProductos, crearProducto } = require('../controllers/externalController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/poblar', poblarProductos);

router.get('/', obtenerProductos);

router.get('/search', buscarProductos);

router.post('/crear', authMiddleware, crearProducto);

module.exports = router;