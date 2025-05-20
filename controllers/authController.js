const usuarioModel = require('../models/usuarioModel');

console.log('authController.js carregado!');

const exibirLogin = (req, res) => {
  console.log('Função exibirLogin chamada!');
  res.render('home', { error: null });
};

const login = async (req, res) => {
  console.log('Função login chamada!');
  const { email, senha } = req.body;

  try {
    const usuario = await usuarioModel.getUserByEmail(email);

    if (usuario && usuario.senha === senha) { // Em produção, use bcrypt!
      req.session.userId = usuario.id;
      req.session.usuario = { nome: usuario.nome };
      res.redirect('/livros');
    } else {
      res.render('home', { error: 'Credenciais inválidas.' });
    }
  } catch (error) {
    console.error('Erro ao realizar login:', error);
    res.render('home', { error: 'Erro ao realizar login.' });
  }
};

const logout = (req, res) => {
  console.log('Função logout chamada!');
  req.session.destroy((err) => {
    if (err) {
      console.error('Erro ao fazer logout:', err);
    }
    res.redirect('/');
  });
};

module.exports = {
  exibirLogin,
  login,
  logout
};