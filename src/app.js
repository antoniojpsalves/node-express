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

// criando uma rota para requst do tipo post
app.post('/livros', (req, res) => {
    // incluindo no array o que vier no corpo da requst
    livros.push(req.body);

    //devolvendo uma respota
    res.status(201).send('Livro cadastrado com sucesso');
});

export default app;