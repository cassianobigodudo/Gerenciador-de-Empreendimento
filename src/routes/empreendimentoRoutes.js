const express = require('express');
const router = express.Router();
const empreendimentoController = require('../controllers/empreendimentoController');

router.post('/', empreendimentoController.criar);
router.get('/', empreendimentoController.listar);

module.exports = router;