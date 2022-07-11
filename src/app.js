import express from 'express';

// criando uma instância de express
const app = express();

// recurso que interpreta o que chega em forma de json no request
app.use(express.json());

const livros = [
    {
        id: 1,
        "titulo": "Senhor dos anéis",
    },
    {
        id: 2,
        "titulo": "O Hobbit",
    }
];

// criando uma rota para request tipo get '/' 
app.get('/', (req, res) => {
    res.status(200).send('Curso de node js!');
});

// criando uma rota para request tipo get '/livros' 
app.get('/livros', (req, res) => {
    res.status(200).json(livros);
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

// função que retorna o índice do livro com o id passado
function encontraLivro(id) {
    return livros.findIndex(livro => livro.id == id);
}
export default app;