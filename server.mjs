import express from 'express';
import path from 'path';

const app = express();
const PORT = 5000;

// Serve os arquivos estáticos da pasta 'dist'
app.use(express.static(path.join(process.cwd(), 'dist')));

// Envia o index.html para qualquer rota que não seja um arquivo estático
app.get('*', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
