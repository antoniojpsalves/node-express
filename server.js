import app from './src/app.js';

// definindo a porta que o servidor vai ficar ouvindo
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`listen request in localhost:${port}`);
});