const axios = require('axios');

// fazendo requisição do servior com o nosso json
// precisa rodar o seguinte comando no terminal :
// npx json-server --watch {arquivo json} --port {porta}

function get() {
    // pega os dados
    axios.get('http://localhost:3001/usuarios')
        // se conseguir os dados
        .then (response => {
            // mostra os dados
            console.log("Usuários: ", response.data);
        })
        // Se a requisição der erro
        .catch(err => {
            // se der erro
            console.error("Erro ao pegar usuários");
        })
}

function post (nome) {
    // adiciona dados
    axios.post('http://localhost:3001/usuarios', { 
        nome: nome
    })
        // se conseguir os dados
        .then(response => {
            console.log("Usuário adicionado:", response.data)
        })
        // caso dê erro
        .catch(err => {
            console.log("Erro ao adicionar usuario:");
        })
}


function put(id) {
    // autaliza dados
    axios.put(`http://localhost:3001/usuarios/${id}`, {
        nome : "Kayo"
    })
        .then(response => {
            console.log(`Usuário modificado: ${response.data}`);
        })
        .catch(err => {
            console.log(`Erro ao autalizar usuário ${err}`)
        })
}

function deleteDados (id) {
    // deleta os dados
    axios.delete(`http://localhost:3001/usuarios/${id}`)
        .then(response => {
            console.log("Usuário foi deletado");
        })
        .catch(err => {
            console.error("Erro ao excluir funcionário");
        })
}

// get(); // pega dados
// post("Kayo"); // coloca dados
// put("1"); // autaliza dados
// deleteDados("1"); // deleta dados