const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt'); // Você precisará instalar: npm install bcrypt

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'biblioteca'
});

async function getUserByEmail(email) {
  try {
    const [rows] = await pool.execute('SELECT * FROM usuarios WHERE email = ?', [email]);
    return rows[0];
  } catch (error) {
    console.error('Erro ao buscar usuário por e-mail:', error);
    throw error;
  }
}

// Função para comparar a senha fornecida com a senha hash no banco de dados
async function comparePassword(plainPassword, hashedPassword) {
  try {
    return await bcrypt.compare(plainPassword, hashedPassword);
  } catch (error) {
    console.error('Erro ao comparar senhas:', error);
    return false;
  }
}

module.exports = {
  getUserByEmail,
  comparePassword
};