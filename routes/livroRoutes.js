//Rotas para funcionalidades de livros
const express = require('express');
const router = express.Router();
const livroController = require('../controllers/livroController');
console.log('livroController:', livroController);

// Listar todos os livros
router.get('/', livroController.listarLivros);

// Exibir formulário de cadastro
router.get('/cadastro', livroController.exibirFormularioCadastro);

// Cadastrar um novo livro
router.post('/cadastro', livroController.cadastrarLivro);

// Exibir formulário de edição
router.get('/editar/:id', livroController.exibirFormularioEdicao);

// Atualizar um livro
router.post('/editar/:id', livroController.atualizarLivro);

// Excluir um livro
router.get('/excluir/:id', livroController.excluirLivro); // <-- Possível ponto do erro

module.exports = router;