//Lógica para lidar com as operações de livros
const livroModel = require('../models/livroModel');

console.log('livroController.js carregado!');

const listarLivros = async (req, res) => {
  console.log('Função listarLivros chamada!');
  try {
    const livros = await livroModel.getAllLivros();
    res.render('main', { livros: livros, usuario: req.session.usuario });
  } catch (error) {
    console.error('Erro ao listar livros:', error);
    res.status(500).send('Erro ao listar livros.');
  }
};

const exibirFormularioCadastro = (req, res) => {
  console.log('Função exibirFormularioCadastro chamada!');
  res.render('formLivro');
};

const cadastrarLivro = async (req, res) => {
  console.log('Função cadastrarLivro chamada!');
  const { titulo, autor, categoria, ano_publicacao, editora } = req.body;
  try {
    await livroModel.addLivro(titulo, autor, categoria, ano_publicacao, editora);
    res.redirect('/livros'); // Redirecionar para a lista de livros
  } catch (error) {
    console.error('Erro ao cadastrar livro:', error);
    res.status(500).send('Erro ao cadastrar livro.');
  }
};

const exibirFormularioEdicao = async (req, res) => {
  console.log('Função exibirFormularioEdicao chamada!');
  const livroId = req.params.id;
  try {
    const livro = await livroModel.getLivroById(livroId);
    if (livro) {
      res.render('formAlterarLivro', { livro: livro });
    } else {
      res.status(404).send('Livro não encontrado.');
    }
  } catch (error) {
    console.error('Erro ao exibir formulário de edição:', error);
    res.status(500).send('Erro ao exibir formulário de edição.');
  }
};

const atualizarLivro = async (req, res) => {
  console.log('Função atualizarLivro chamada!');
  const livroId = req.params.id;
  const { titulo, autor, categoria, ano_publicacao, editora } = req.body;
  try {
    await livroModel.updateLivro(livroId, titulo, autor, categoria, ano_publicacao, editora);
    res.redirect('/livros'); // Redirecionar para a lista de livros
  } catch (error) {
    console.error('Erro ao atualizar livro:', error);
    res.status(500).send('Erro ao atualizar livro.');
  }
};

const excluirLivro = async (req, res) => {
  console.log('Função excluirLivro chamada!');
  const livroId = req.params.id;
  try {
    await livroModel.deleteLivro(livroId);
    res.redirect('/livros'); // Redireciona para a lista de livros após exclusão
  } catch (error) {
    console.error('Erro ao excluir livro:', error);
    res.status(500).send('Erro ao excluir livro.');
  }
};

module.exports = {
  listarLivros,
  exibirFormularioCadastro,
  cadastrarLivro,
  exibirFormularioEdicao,
  atualizarLivro,
  excluirLivro
};