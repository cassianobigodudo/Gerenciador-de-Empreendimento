const express = require('express');
const router = express.Router();
const empreendimentoController = require('../controllers/empreendimentoController');

router.post('/', empreendimentoController.criar);
router.get('/', empreendimentoController.listar);
router.put('/:id', empreendimentoController.atualizar);
router.delete('/:id', empreendimentoController.deletar);

module.exports = router;