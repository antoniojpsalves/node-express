// importando o módulo http do nodejs
const http = require('http');

// definindo a porta que o servidor vai ficar ouvindo
const port = 3000;

// definindo o serivor e como ele vai se comportar
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Curso de node.js');
});


// iniciando o listening do server na porta 3000

server.listen(port, () => {
    console.log(`listen request in localhost:${port}`);
});