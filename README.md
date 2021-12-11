# Backend Clube da Cachaça

Digite aqui um overview sobre o projeto, tecnoligias utilizas (ex. express e tals)

### Pré requisitos

- <a href="https://docs.mongodb.com/manual/installation/">MongoDB</a>, no projeto foi utilizado a versão xx.xx
- <a href="https://www.postman.com/downloads/">Postman</a>, no projeto foi utilizado a versão xx.xx

### Rodando o projeto

Abra seu terminal na pasta do projeto e execute o segundo comando

```sh
$ npm init -y
```

> A versão do Node utilizada na aplicação é a 16.13.0

Após inicializar o projeto, instale as bibleotecas através do comando

```sh
$ npm install bcrypt cookie-parser cors express jsonwebtoken mongoose multer nodemon
```

E para finalizar execute o comando abaixo para executar a aplicação e testa-lá no postman

```sh
$ npm run start
```

Conectar o projeto ao mongoDB através do código. Na pasta db no projeto é possivel identifcar o arquivo conn.js. Com o código no arquivo e utilizando a extensão "mongoose" (instalada no começo do projeto) o banco será conectado ao sistema.

O próximo passo é criar os arquivos .js do usuario e do produto na pasta models, conectando tbm o mongoose `const mongoose = require ('../db/conn')`.

Após isso será necessario criar os requisitos tanto de usuario, como de produto, em seus respectivos arquivos.

Criando os models de usuario e produto, será possivel dar inicio ao sistema de registro de usuario, criando o arquivo `UserController.js` dentro da pasta `controllers`.

Com isso deverá criar um arquivo index (para as configurações de conexões, endereços e rotas) e o arquivo para suas rotas, que é denominado no projeto `UserRoutes.js`, la estará todos os caminhos e conexões de rotas para o postman.

Com o Postman aberto, deverá criar uma nova collection com o nome do seu projeto e criar duas pastas dentro dela, uma para Usuário e outra para Produtos.

Na pasta do Usuário será necessario criar uma request para registro com a rota desejada (exemplo: /users/ register) e com a Tag abaixo "POST".

O próximo passo é ir na pasta principal da sua collection (a que tem o nome do seu projeto), ir em "Variables", no campo "variable" preencher com "URL" e em "initial value" preencher com o endereço do seu localhost (exemplo: http://localhost:5000/), colocar esse mesmo endereço em "current value"

Após feito isso, no campo que esta ao lado de "POST" preencher com sua rota, juntamente com a tag de url (exemplo: {{URL}}users/register.
