# 🚀 Gerenciador de Empreendimentos SC - API REST

## 📋 Sobre o Projeto
Este projeto foi desenvolvido como solução para o desafio prático da trilha **IA para DEVs** do programa SCTEC. O objetivo principal é fornecer uma plataforma back-end robusta, segura e estruturada para registrar, organizar, atualizar e remover informações sobre empreendimentos no estado de Santa Catarina. 

A API foi projetada para atuar como o motor de um sistema que fomenta o ecossistema de inovação catarinense, permitindo gerenciar dados vitais de empresas em setores estratégicos como Tecnologia, Comércio, Indústria, Serviços e Agronegócio. O sistema adota rigorosamente a arquitetura MVC (Model-View-Controller) para garantir uma separação clara de responsabilidades. Esta abordagem não só facilita a manutenção do código, como também prepara a aplicação para uma futura escalabilidade.

## 🛠️ Tecnologias e Arquitetura
A aplicação foi construída utilizando o ecossistema JavaScript no back-end, priorizando a performance e as boas práticas de desenvolvimento (Clean Code):
- **Node.js**: Ambiente de execução rápido e assíncrono, ideal para APIs REST.
- **Express**: Framework minimalista que proporciona um roteamento ágil e eficiente.
- **PostgreSQL**: Sistema de gerenciamento de banco de dados relacional escolhido para garantir a consistência, integridade e persistência segura dos dados da aplicação.
- **node-postgres (pg)**: Driver nativo para comunicação direta com o banco de dados. A utilização de *queries* parametrizadas foi implementada para prevenir ataques de *SQL Injection*.
- **Dotenv**: Gerenciamento seguro de variáveis de ambiente e credenciais sensíveis.

## 🏗️ Estrutura de Diretórios
O código foi organizado visando a máxima legibilidade:
- `/src/config`: Arquivos de configuração, incluindo a conexão (Pool) com o banco de dados.
- `/src/controllers`: Lógica de negócio e tratamento do ciclo de requisição e resposta HTTP.
- `/src/models`: Camada de acesso aos dados, contendo as interações diretas com o PostgreSQL.
- `/src/routes`: Definição dos *endpoints* da API.
- `server.js`: Ponto de entrada da aplicação que inicializa o servidor.

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
- Node.js instalado (versão 16 ou superior recomendada)
- PostgreSQL instalado e em execução (via pgAdmin ou terminal)
- Postman ou Insomnia para testar os *endpoints*

### Passo a Passo
1. Clone o repositório para a sua máquina local:
```bash
git clone https://github.com/cassianobigodudo/Gerenciador-de-Empreendimento.git
```

2. Acesse a pasta do projeto e instale as dependências:
```bash
npm install
```

3. Crie um banco de dados no PostgreSQL chamado `empreendimento_sc` e execute o seguinte script SQL para criar a tabela:
```sql
CREATE TABLE empreendimentos (
    id SERIAL PRIMARY KEY,
    nome_empreendimento VARCHAR(255) NOT NULL,
    nome_responsavel VARCHAR(255) NOT NULL,
    municipio VARCHAR(100) NOT NULL,
    segmento VARCHAR(50) CHECK (segmento IN ('Tecnologia', 'Comércio', 'Indústria', 'Serviços', 'Agronegócio')),
    contato VARCHAR(255) NOT NULL,
    status VARCHAR(10) CHECK (status IN ('Ativo', 'Inativo')) DEFAULT 'Ativo'
);
```

4. Crie um arquivo `.env` na raiz do projeto com as suas credenciais:
```env
PORT=3000
DB_USER=seu_usuario_postgres
DB_HOST=localhost
DB_NAME=empreendimento_sc
DB_PASSWORD=sua_senha
DB_PORT=5432
```

5. Inicie o servidor em modo de desenvolvimento:
```bash
npm run dev
```

## 🛣️ Endpoints da API (Rotas REST)
A API responde no formato JSON. Abaixo estão as rotas disponíveis:

- `POST /empreendimentos`: Registra um novo empreendimento.
- `GET /empreendimentos`: Lista todos os empreendimentos registrados no banco de dados.
- `PUT /empreendimentos/:id`: Atualiza os dados de um empreendimento existente com base no ID fornecido.
- `DELETE /empreendimentos/:id`: Remove permanentemente um registro do sistema.

## 🎥 Demonstração e Pitch (Vídeo)
Para conferir a explicação das decisões técnicas, a arquitetura do código e o sistema em pleno funcionamento, assista ao vídeo de apresentação:

👉 **[Assistir ao Vídeo no YouTube](https://youtu.be/jcmaLug7zDc)**

---
*Desenvolvido por Cassiano Calazans Coelho Machado para o processo seletivo SCTEC.*
