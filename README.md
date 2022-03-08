# Boas vindas ao repositório do projeto Cookmaster!
#### Projeto feito junto com a Trybe

---

# Sobre o Projeto :
Api feita junto com a trybe .
Com autenticaçao para suas rotas usando jwt. Possui rota de cadastro , login e acesso a todas receitas ou uma receita especifica.
Podendo selecionar , editar ou deletar uma receita. Carregar imagem com Multer.


# Habilidades

- Entender o que há por dentro de um token de autenticação;

- Gerar tokens a partir de informações como login e senha;

- Autenticar rotas do Express, usando o token JWT;

- Fazer upload de arquivos em APIs REST;

- Salvar arquivos no servidor através de uma API REST;

- Consultar arquivos do servidor através de uma api REST.

- Realizar testes de integração

---

## O que o Projeto faz ?

operações básicas que se pode fazer em um determinado banco de dados: Criação, Leitura, Atualização e Exclusão (ou `CRUD`, para as pessoas mais íntimas 😜)
- Post  /users  - Cadastra usuario
- Post /login  - Faz o login 
- Post /recipes - cria receita
- get /recipes - pega todas receitas 
- Get /recipes/:id - Pega uma receita pelo id
- Put /recipes/:id  -  Edita uma Receita pelo id
- Delete /recipes/:id - Deleta uma receita pelo id
- Put /recipes/:id/image - Edita receita e insere imagem

## Como rodar o codigo na maquina?

Assim que o projeto estiver em sua maquina você deve abrir e  :
-  instalar dependencias : npm install
( aviso:  instalaçoes e versoes trabalhadas em uma máquina linux ubunto/mint)
- Colocar Api no ar com nodemon : npm run dev


