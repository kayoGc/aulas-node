/**
 * Esse é o entrypoint da aplicação
 */

// depedencias
const express = require('express');
const cors = require('cors');

// inicia o express
const app = express();

// config do cors
var corsOptions = {
    origin: "http://localhost:8080"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// configs do model
const db = require("../node_sql/models");

db.sequelize.sync()
    .then(() => {
        console.log("Banco de dados sicronizado");
    })
    .catch(error => {
        console.log(`Falha ao sicronizar db: ${error.message}`);
    })

// rota simples
app.get("/", (req, res) => {
    res.json({message: "Bem vindo!!!"});
});

// seta porta, escuranto requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}.`);
});