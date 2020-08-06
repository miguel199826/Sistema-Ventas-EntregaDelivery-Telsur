const express = require('express');

const router = express.Router();

router.get('/catalogo', (req, res) => {
    res.render('catalogo', { title: 'Catalogo de Productos' });
});
router.get('/compra', (req, res) => {
    res.render('compra', { title: 'Reservar' });
});
router.get('/login', (req, res) => {
    res.render('login', { title: 'Reservar' });
});
router.get('/ticket', (req, res) => {
    res.render('ticket', { title: 'Reservar' });
});
router.get('/consulta', (req, res) => {
    res.render('consulta', { title: 'Reservar' });
});
router.get('/ModuloOperario', (req, res) => {
    res.render('ModuloOperario', { title: 'Reservar' });
});



module.exports = router;