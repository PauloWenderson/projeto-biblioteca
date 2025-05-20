const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const livroRoutes = require('./routes/livroRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const port = 3000;

// Configurar o EJS como motor de visualização
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Middleware para processar dados do formulário
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Middleware para sessões
app.use(session({
  secret: 'sua_chave_secreta', // Use uma chave secreta forte em produção
  resave: false,
  saveUninitialized: true
}));

// Usar as rotas
app.use('/', authRoutes);
app.use('/livros', livroRoutes); // Prefixo para rotas de livros (requer autenticação)

// Middleware para verificar se o usuário está autenticado (exemplo)
function requireAuth(req, res, next) {
  if (req.session.userId) {
    next();
  } else {
    res.redirect('/'); // Redirecionar para a página de login se não autenticado
  }
}

// Aplicar middleware de autenticação para rotas de livros
app.use('/livros', requireAuth);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});