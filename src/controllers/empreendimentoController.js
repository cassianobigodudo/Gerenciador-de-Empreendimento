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
const atualizar = async (req, res) => {
    const { id } = req.params;
    
    try {
        const empreendimentoAtualizado = await empreendimentoModel.atualizarEmpreendimento(id, req.body);
        
        if (!empreendimentoAtualizado) {
            return res.status(404).json({ erro: 'Empreendimento não encontrado.' });
        }
        
        return res.status(200).json(empreendimentoAtualizado);
    } catch (erro) {
        console.error('Erro ao atualizar:', erro);
        return res.status(500).json({ erro: 'Erro interno ao atualizar empreendimento.' });
    }
};

const deletar = async (req, res) => {
    const { id } = req.params;
    
    try {
        const empreendimentoDeletado = await empreendimentoModel.deletarEmpreendimento(id);
        
        if (!empreendimentoDeletado) {
            return res.status(404).json({ erro: 'Empreendimento não encontrado.' });
        }
        
        return res.status(200).json({ mensagem: 'Empreendimento removido com sucesso!', empreendimento: empreendimentoDeletado });
    } catch (erro) {
        console.error('Erro ao deletar:', erro);
        return res.status(500).json({ erro: 'Erro interno ao deletar empreendimento.' });
    }
};

module.exports = {
    criar,
    listar,
    atualizar,
    deletar // <-- Exporte aqui também!
};