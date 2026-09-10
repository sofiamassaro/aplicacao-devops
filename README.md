# Aplicação DevOps

Aplicação web desenvolvida em **Node.js** utilizando o framework **Express.js**, criada para a atividade da disciplina de DevOps.

## Funcionalidades

* Página inicial da aplicação.
* Endpoint para consulta dos integrantes do grupo.
* Servidor web desenvolvido com Express.js.

## Tecnologias utilizadas

* Node.js
* Express.js
* JavaScript
* Git
* GitHub

## Como executar o projeto

Clone o repositório:

```bash
git clone https://github.com/sofiamassaro/aplicacao-devops.git
```

Entre na pasta do projeto:

```bash
cd aplicacao-devops
```

Instale as dependências:

```bash
npm install
```

Execute a aplicação:

```bash
node src/app.js
```

Após iniciar o servidor, acesse:

```text
http://localhost:3000
```

## Rotas

### Página inicial

```text
GET /
```

Exibe a página inicial da aplicação.

### Integrantes

```text
GET /integrantes
```

Retorna os integrantes do grupo em formato JSON.

## Estrutura do projeto

```text
aplicacao-devops/
├── src/
│   ├── app.js
│   └── views/
│       └── index.html
├── package.json
├── package-lock.json
└── README.md
```
