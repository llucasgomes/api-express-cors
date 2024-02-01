import express from "express";
import cors from "cors";


const app = express();
const port = 6666;

// Middleware CORS para permitir requisições de diferentes origens
app.use(cors());

// Rota 1: Hello World
app.get('/hello', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

// Rota 2: Exemplo de dados
app.get('/data', (req, res) => {
  const data = { name: 'John Doe', age: 25 };
  res.json(data);
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});