
# Sistema de Gerenciamento de Produtos

Este projeto é um sistema de gerenciamento de produtos, composto por um backend desenvolvido em NestJS e um frontend em Angular. O backend utiliza Docker Compose para gerenciar a dependência do banco de dados, incluindo uma instância do PostgreSQL e TypeORM para interações com o banco. O frontend fornece uma interface de usuário simples para gerenciamento dos produtos.

## Índice

- [Pré-requisitos](#pré-requisitos)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Configuração do Backend](#configuração-do-backend)
- [Configuração do Frontend](#configuração-do-frontend)
- [Funcionalidades](#funcionalidades)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contribuição](#contribuição)

## Pré-requisitos

Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)

## Tecnologias Utilizadas

- **Backend:**
  - [NestJS](https://nestjs.com/)
  - [TypeORM](https://typeorm.io/)
  - [PostgreSQL](https://www.postgresql.org/)
  - [Docker Compose](https://docs.docker.com/compose/)

- **Frontend:**
  - [Angular](https://angular.io/)
  - [Bootstrap](https://getbootstrap.com/) (ou outro framework de UI de sua escolha)

## Configuração do Backend

1. Clone o repositório e navegue até o diretório do backend:

   ```bash
   git clone https://github.com/jamillalobo/desafio-usavings.git
   cd desafio-usavings/backend
   npm install
   ```

2. Crie um arquivo `.env` com as variáveis de ambiente necessárias:

   ```
   DB_HOST=localhost
   DB_PORT=5432
   DB_USERNAME=postgres
   DB_PASSWORD=postgres
   DB_DATABASE=products
   ```

3. Inicie o backend com Docker Compose (lembre-se de estar com o docker desktop ou docker hub aberto):

   ```bash
   docker-compose up --build
   ```

   O comando acima irá inicializar os serviços do Docker com PostgreSQL.

4. Inicie a aplicação Nest
   
      ```bash
   npm run start:dev
   ```

   Os comandos acima irá inicializar os serviços do NestJS.
   
5. O backend estará disponível em: `http://localhost:3000`.

## Configuração do Frontend

1. Navegue até o diretório do frontend:

   ```bash
   cd desafio-usavings/frontend
   ```

2. Instale as dependências do projeto Angular:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm start
   ```

4. O frontend estará disponível em: `http://localhost:4200`.

## Funcionalidades

- Adicionar, listar, atualizar e excluir produtos
- Filtrar produtos por data de validade

## Estrutura do Projeto

```bash
nome-do-repositorio/
├── backend/                # Código do backend (NestJS)
│   ├── src/                # Código fonte do backend
│   └── docker-compose.yml  # Arquivo Docker Compose
├── frontend/               # Código do frontend (Angular)
│   ├── src/                # Código fonte do frontend
├── README.md               # Documentação do projeto
└── .gitignore              # Arquivos ignorados pelo Git
```

## Contribuição

Contribuições são bem-vindas! Fique a vontade pra abrir issues e submeter pull requests.

---

Developed by Jamilla Lobo <♡︎/>

