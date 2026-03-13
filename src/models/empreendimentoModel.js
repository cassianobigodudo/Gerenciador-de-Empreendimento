const pool = require('../config/db');

const criarEmpreendimento = async (dados) => {
    const { nome_empreendimento, nome_responsavel, municipio, segmento, contato, status } = dados;
    
    const query = `
        INSERT INTO empreendimentos (nome_empreendimento, nome_responsavel, municipio, segmento, contato, status)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *;
    `;
    
    const valores = [nome_empreendimento, nome_responsavel, municipio, segmento, contato, status || 'Ativo'];
    
    const resultado = await pool.query(query, valores);
    return resultado.rows[0];
};

module.exports = {
    criarEmpreendimento
};