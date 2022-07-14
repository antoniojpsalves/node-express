import express from 'express';
import db from './config/dbConnect.js';
import livros from './models/Livro.js';

// Prevendo eventual erro na conexão e usando bind para juntar no console, uma mensagem de erro
db.on("error", console.log.bind(console, 'Erro de conexão'));

// Tentando a conexão uma vez, e informando caso sucesso
db.once("open", () => {
    console.log("A conexão com o banco de dados foi feita com sucesso!");
});

// criando uma instância de express
const app = express();

// recurso que interpreta o que chega em forma de json no request
app.use(express.json());

// criando uma rota para request tipo get '/' 
app.get('/', (req, res) => {
    res.status(200).send('Curso de node js!');
});

// criando uma rota para request tipo get '/livros' 
app.get('/livros', (req, res) => {

    // usando o método find para recuperar todos os registros
    livros.find((err, livros) => {
        res.status(200).json(livros);
    });

});


// criando uma rota para retornar apenas 1 livro pelo id
app.get('/livros/:id', (req, res) => {
    const index = encontraLivro(req.params.id);
    res.status(200).json(livros[index]);
});

// criando uma rota para requst do tipo post
app.post('/livros', (req, res) => {
    // incluindo no array o que vier no corpo da requst
    livros.push(req.body);

    // devolvendo uma resposta
    res.status(201).send('Livro cadastrado com sucesso');
});

// criando método de atualização com put
// recebe por parametro o identificador único do obj
app.put('/livros/:id', (req, res) => {
    //recuperando o índice do livro com o id recebido no request
    const index = encontraLivro(req.params.id);

    // O titulo vem no corpo do request e não por parametro
    livros[index].titulo = req.body.titulo;

    res.status(200).json(livros);
});

// criando a rota para delete

app.delete('/livros/:id', (req, res) => {
    // usando destructuring
    const { id } = req.params;
    const index = encontraLivro(id);

    // usando a função splice para apagar o indice informado
    livros.splice(index, 1);
    res.status(200).send(`Livro ${id} removido com sucesso`);
});

// função que retorna o índice do livro com o id passado
function encontraLivro(id) {
    return livros.findIndex(livro => livro.id == id);
}
export default app;