# API de Cadastro de Usuários

Este projeto é uma API simples para cadastro de usuários, desenvolvida em Node.js com TypeScript. A API inclui operações CRUD (Create, Read, Update, Delete) e foi testada usando Jest.

## Desenvolvedora

- <a href="https://github.com/gioivieira" target="_blank"><p>Giovana Inez Vieira</p></a>

## Estrutura dos Endpoints e Testes

- **`src/`**: Contém o código fonte do projeto.
  - **`endpoints/`**: Endpoints da API.
    - `createUser.ts`: Endpoint para criar um usuário.
    - `deleteUser.ts`: Endpoint para deletar um usuário.
    - `getUserById.ts`: Endpoint para buscar um usuário pelo ID.
    - `getUsers.ts`: Endpoint para listar todos os usuários.
    - `updateUser.ts`: Endpoint para atualizar um usuário.
  - **`tests/`**: Testes automatizados.
    - `createUser.test.ts`: Testes para o endpoint de criação de usuário.
    - `deleteUser.test.ts`: Testes para o endpoint de exclusão de usuário.
    - `getUserById.test.ts`: Testes para o endpoint de busca de usuário por ID.
    - `getUsers.test.ts`: Testes para o endpoint de listagem de usuários.
    - `updateUser.test.ts`: Testes para o endpoint de atualização de usuário.

## Como Executar o Projeto

### Pré-requisitos

- Node.js instalado.
- npm ou yarn instalado.

### Instalação

1. Clone o repositório:
```bash
   git clone https://github.com/gioivieira/desafio-qa-xbri.git
```

2. Navegue até a pasta do projeto:
```bash
   cd desafio-qa-xbri
```

3. Instale as dependências:
```bash
   npm install
```

### Executando o Projeto

- Modo de Desenvolvimento
```bash
   npm run dev
```

O servidor será iniciado na porta padrão (3003) e estará disponível em http://localhost:3003.

- Modo de Produção

1. Compile o código TypeScript:
```bash
   npm run build
```
2. Inicie o servidor:
```bash
   npm start
```

### Rodando os Testes

- Para executar os testes automatizados, use o seguinte comando:
```bash
   npm test
```

Isso rodará todos os testes na pasta src/tests/.

- Ou use o comando abaixo para executar os testes de um arquivo específico:
```bash
   npm test createUser.test.ts
```