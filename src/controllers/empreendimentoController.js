const empreendimentoModel = require('../models/empreendimentoModel');

const criar = async (req, res) => {
    try {
        const novoEmpreendimento = await empreendimentoModel.criarEmpreendimento(req.body);
        return res.status(201).json(novoEmpreendimento);
    } catch (erro) {
        console.error('Erro ao criar empreendimento:', erro);
        return res.status(500).json({ erro: 'Erro interno no servidor ao criar empreendimento.' });
    }
};

module.exports = {
    criar
};