const express = require('express')

const app = express()
const PORT = 3000

// Endpoint raiz servindo a página HTML (Requisito 5)
app.get('/', (req, res) => {
  res.sendFile('views/index.html', { root: __dirname })
})

// Dados e Endpoint dos integrantes (Requisito 6)
const data = {
  integrantes: [
    { nome: 'Matheus Henrique' },
    { nome: 'Sofia Massaro' },
    { nome: 'Jordana Góes' }
  ]
}

app.get('/integrantes', (req, res) => {
  res.json(data)
})

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})