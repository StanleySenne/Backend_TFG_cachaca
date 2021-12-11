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

Criando os models de usuario e produto, será possivel dar inicio ao sistema de registro de usuario, criando o arquivo `UserController.js` dentro da pasta `controllers`. Nele será implementado as campos que deseja que o usuario tenha, além de todas as validações, como por exemplo, "senha obrigatoria", "email obrigatório" e etc.

Com isso deverá criar um arquivo index (para as configurações de conexões, endereços e rotas) e o arquivo para suas rotas, que é denominado no projeto `UserRoutes.js`, la estará todos os caminhos e conexões de rotas para o postman.

Com o Postman aberto, deverá criar uma nova collection com o nome do seu projeto e criar duas pastas dentro dela, uma para Usuário e outra para Produtos.

Na pasta do Usuário será necessario criar uma request para registro com a rota desejada (exemplo: /users/ register) e com a Tag abaixo "POST".

O próximo passo é ir na pasta principal da sua collection (a que tem o nome do seu projeto), ir em "Variables", no campo "variable" preencher com "URL" e em "initial value" preencher com o endereço do seu localhost (exemplo: http://localhost:5000/), colocar esse mesmo endereço em "current value"

Após feito isso, no campo que esta ao lado de "POST" preencher com sua rota, juntamente com a tag de url (exemplo: {{URL}}users/register), porém, para funcionar, deverá ser criado a rota dessa request no codigo, na pasta Routes, no arquivo `UserRoutes.js`. Após isso a request estará pronta para teste e para isso, no postman, deverá ir na sua request em questão, ir em Body, depois raw e colocar os campos que foram definidos no codigo com seus respectivos valores, exemplo:


``{
    "name" : "Stanley",
    "email" : "stan@hotmail.com",
    "phone" : "539995909432",
    "cpf": "46559994844",
    "password" : "12345",
    "date" : "14/02/1999",
    "confirmpassword" : "12345"
}``

Então, para finalizar, será implementado um helper para criação de tokens, que será derivado da biblioteca jsonwebtoken, esse helper poderá ser usado para muitas outras coisas. (será utilizado tbm a biblioteca bcrypt para criptografia)

Para o login será o mesmo processo, será criado uma rota no codigo e essa rota se comunicará com o postman, tendo o mesmo endereço, onde terá os campos de email e password para validação, caso não haja email, ou senha estiver errada, o sistema avisará. Após digitar um usuario correto que ja está cadastrado (na funçao create, onde os usuarios cadastrados vão direto para o banco de dados), o postman mostrará uma mensagem de autenticação e gerará o token do usuario e seu id.

Para logar manualmente no sistema, poderá copiar esse token e adicionar nas variaveis do projeto (pasta principal: GetaCachaça).

Depois, no mesmo esquema será criada uma request para checagem de usuário e consulta de usuario por id, que também será no mesmo padrão das outras, porém dessa vez obterá as informações dos usuarios.

Para finalizar será criada a rota de atualização de usuario onde será colocado o id do usuario especifico e os dados deverão ser alterados no form-data.

CONTROLLER DE PRODUTO -


