const axios = require('axios');
const PORT = 3001

// tem que utilizar o comando 'npx json-server --watch db.json --port {porta}' para funcionar

// faz requisição get usuários
// axios.get('http://localhost:3001/usuarios')
//     .then(response => {
//         // mostra os usuários
//         console.log('Usuarios:', response.data);
//     })
//     // se dar erro
//     .catch(err => {
//         // Mostra os erros
//         console.error("Erro ao buscar usuários:", err);
//     })

// metodo post
// axios.post(`http://localhost:${PORT}/usuarios`, { nome : 'Kayo'})
//     .then(response => {
//         console.log(response.data);
//     })
//     .catch(err => {
//         console.error(`Erro ao criar usuário: ${err}`);
//     })

// metodo put
// axios.put(`http://localhost:${PORT}/usuarios/2`, { nome: 'Joao'})
//     .then(response => {
//         console.log(`Usuário atualizado ${response.data}`);
//     })
//     .catch(err => {
//         console.error(`Erro ao atualizar usuário: ${err}`);
//     })

// metodo delete
axios.delete(`http://localhost:${PORMT}/usuarios/2`)
    .then(response => {
        console.log("Usuário apagado com sucesso");
    })
    .catch(err => {
        console.error("Erro ao apagar usuário:", err);
    })