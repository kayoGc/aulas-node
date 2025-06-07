const axios = require('axios');

// tenta fazer requisição
axios.get('https://jsonplaceholder.typicode.com/posts/1')
    // quando pegar a resposta
    .then (response => {
        // mostra dados da resposta
        console.log(response.data);
    })
    // caso dê erro
    .catch(err => {
        // mostra erro
        console.error(err);
    })