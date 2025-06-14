const fs = require('fs');
const http = require('http');
const express = require('express');
const app = express();
// porta do servidor, localhost:8001
const PORT = 8001;


// ouve qualquer requisição
app.use((req, res) => {
    // vai ler o arquivo index.html
    fs.readFile('aula03/index.html', 'utf-8', (err, data) => {
        // se tiver erro
        if (err) {
            // manda uma resposta sinalizando um erro do servidor
            res.status(500).send('Erro ao ler o arquivo HTML');
            return;
        }
        
        // manda a pagina html como resposta
        res.send(data);
    })
    
})
    
// cria o servidor
http.createServer(app).listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`);
})