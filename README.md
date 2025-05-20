# Projeto Biblioteca

Este é um projeto de um sistema de biblioteca desenvolvido utilizando Node.js, Express.js e EJS para a interface do usuário. O sistema permite o gerenciamento de um acervo de livros, incluindo funcionalidades para listar, cadastrar, editar e excluir livros. Além disso, implementa um sistema básico de autenticação de usuários.

## Funcionalidades Principais

* **Autenticação de Usuários:** Permite que usuários façam login para acessar as funcionalidades do sistema.
* **Listagem de Livros:** Exibe uma lista de todos os livros cadastrados no acervo.
* **Cadastro de Livros:** Permite adicionar novos livros ao acervo, incluindo título, autor, categoria, ano de publicação e editora.
* **Edição de Livros:** Possibilita a modificação dos detalhes de um livro existente.
* **Exclusão de Livros:** Permite remover livros do acervo.

## Tecnologias Utilizadas

* **Node.js:** Ambiente de execução JavaScript para o servidor.
* **Express.js:** Framework web minimalista e flexível para Node.js.
* **EJS (Embedded JavaScript Templates):** Motor de templates simples para gerar HTML dinâmico.
* **MySQL:** Banco de dados relacional para armazenar os dados do sistema.
* **mysql2:** Driver MySQL para Node.js.
* **express-session:** Middleware para criar e gerenciar sessões de usuários.
* **body-parser:** Middleware para analisar corpos de requisição HTTP (como dados de formulários).
* **nodemon:** Ferramenta para reiniciar automaticamente o servidor Node.js durante o desenvolvimento.
* **bcrypt:** Biblioteca para criptografar senhas de usuários (para um sistema de produção, a criptografia de senhas é essencial).

## Pré-requisitos

Antes de executar o projeto, certifique-se de ter o seguinte instalado em sua máquina:

* **Node.js:** [https://nodejs.org/](https://nodejs.org/)
* **npm (Node Package Manager):** Instalado junto com o Node.js.
* **MySQL:** [https://www.mysql.com/downloads/](https://www.mysql.com/downloads/)

