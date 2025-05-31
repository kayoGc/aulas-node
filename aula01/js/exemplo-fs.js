const fs = require('fs');

// fs pode ler arquivos
fs.readFile('../index.html', 'utf-8', (err,data) => {
    // retorna erro caso tenha um erro
    if (err) {
        throw err;
    }

    // mostra os dados do arquivo
    console.log(data);
});