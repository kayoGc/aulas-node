// mini servidor http
// pega modulo http
const http = require('http');

// cria o servidor
const server = http.createServer((req, res) => {
    // escreve a resposta
    res.write('Olá servidor');
    // finaliza 
    res.end();
})


server.listen(3000);