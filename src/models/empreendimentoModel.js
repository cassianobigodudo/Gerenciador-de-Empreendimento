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

const listarEmpreendimentos = async () => {
    const query = 'SELECT * FROM empreendimentos ORDER BY id ASC';
    const resultado = await pool.query(query);
    return resultado.rows;
};
const atualizarEmpreendimento = async (id, dados) => {
    const { nome_empreendimento, nome_responsavel, municipio, segmento, contato, status } = dados;
    
    const query = `
        UPDATE empreendimentos 
        SET nome_empreendimento = $1, 
            nome_responsavel = $2, 
            municipio = $3, 
            segmento = $4, 
            contato = $5, 
            status = $6
        WHERE id = $7
        RETURNING *;
    `;
    
    const valores = [nome_empreendimento, nome_responsavel, municipio, segmento, contato, status, id];
    
    const resultado = await pool.query(query, valores);
    return resultado.rows[0]; 
};

const deletarEmpreendimento = async (id) => {
    const query = 'DELETE FROM empreendimentos WHERE id = $1 RETURNING *;';
    const resultado = await pool.query(query, [id]);
    return resultado.rows[0]; 
};

module.exports = {
    criarEmpreendimento,
    listarEmpreendimentos,
    atualizarEmpreendimento,
    deletarEmpreendimento 
};