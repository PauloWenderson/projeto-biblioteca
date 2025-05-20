//Rotas para autenticação
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
console.log('authController:', authController);

// Página de login
router.get('/', authController.exibirLogin);

// Processar o login
router.post('/login', authController.login);

// Logout
router.get('/logout', authController.logout);

module.exports = router;