// pega o emissor
const EventEmitter = require('events');
// faz um objeto do emissor
const meuEmissor = new EventEmitter();

// configura o que vai acontecer quando emitirem o evento "evento"
// escuta evento
meuEmissor.on('evento', () => {
    // mensagem na tela
    console.log('Evento capturado');
});

// emite o evento "evento"
// dispara evento
meuEmissor.emit('evento');