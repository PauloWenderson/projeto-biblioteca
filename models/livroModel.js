const mysql = require('mysql2/promise');

// Configuração da conexão com o banco de dados
const pool = mysql.createPool({
  host: 'localhost', // ou o host do seu MySQL
  user: 'root',      // seu usuário do MySQL
  password: '',      // sua senha do MySQL (deixe vazio se não tiver)
  database: 'biblioteca'
});

async function getAllLivros() {
  try {
    const [rows] = await pool.execute('SELECT * FROM livros');
    return rows;
  } catch (error) {
    console.error('Erro ao buscar todos os livros:', error);
    throw error;
  }
}

async function getLivroById(id) {
  try {
    const [rows] = await pool.execute('SELECT * FROM livros WHERE id = ?', [id]);
    return rows[0];
  } catch (error) {
    console.error('Erro ao buscar livro por ID:', error);
    throw error;
  }
}

async function addLivro(titulo, autor, categoria, ano_publicacao, editora) {
  try {
    const [result] = await pool.execute(
      'INSERT INTO livros (titulo, autor, categoria, ano_publicacao, editora) VALUES (?, ?, ?, ?, ?)',
      [titulo, autor, categoria, ano_publicacao, editora]
    );
    return result.insertId;
  } catch (error) {
    console.error('Erro ao adicionar livro:', error);
    throw error;
  }
}

async function updateLivro(id, titulo, autor, categoria, ano_publicacao, editora) {
  try {
    const [result] = await pool.execute(
      'UPDATE livros SET titulo = ?, autor = ?, categoria = ?, ano_publicacao = ?, editora = ? WHERE id = ?',
      [titulo, autor, categoria, ano_publicacao, editora, id]
    );
    return result.affectedRows;
  } catch (error) {
    console.error('Erro ao atualizar livro:', error);
    throw error;
  }
}

async function deleteLivro(id) {
  try {
    const [result] = await pool.execute('DELETE FROM livros WHERE id = ?', [id]);
    return result.affectedRows;
  } catch (error) {
    console.error('Erro ao excluir livro:', error);
    throw error;
  }
}

module.exports = {
  getAllLivros,
  getLivroById,
  addLivro,
  updateLivro,
  deleteLivro
};