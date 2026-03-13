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

const listar = async (req, res) => {
    try {
        const empreendimentos = await empreendimentoModel.listarEmpreendimentos();
        return res.status(200).json(empreendimentos);
    } catch (erro) {
        console.error('Erro ao listar:', erro);
        return res.status(500).json({ erro: 'Erro interno ao listar empreendimentos.' });
    }
};

module.exports = {
    criar,
    listar // <-- Adicione aqui!
};