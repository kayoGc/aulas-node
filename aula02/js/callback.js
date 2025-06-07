/**
 * função exemplo callback
 * @param {String} nome nome da pessoa que quer saudar 
 * @param {Function} callback Função que iremos rodar dentro da função 
 */
function saudacao (nome, callback) {
    // faz a saudação
    console.log(`Olá ${nome}`);

    // roda a função callback
    callback();
}

// chama a função
saudacao("Kayo", () => {
    // callback vai mostrar uma mensagem na tela
    console.log("Codigo da callback rodando");
});