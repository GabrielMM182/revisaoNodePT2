Criar com npm init -y.

Executar npm i express nodemon.

Criar o esqueleto do projeto.

Definir a parte do index.js, já configurando o listen na porta 3000, importando as rotas e usando o express.json().

Começar a definir o nosso controller.
A primeira parte a ser feita será buscar e escrever no arquivo.

Usamos await quando queremos realizar uma requisição através de uma função ou algo mais específico, ainda mais por ser assíncrono (trabalhar com promises).

(PROMISE = mesma coisa que chegar a um restaurante, pedir uma parmegiana e depois receber um papel confirmando que você vai receber sua parmegiana - é uma promessa)
Mostrar como configurar a url_base no Insomnia através do ambiente (environment) base.

Primeiro, realizar o write e search do animal no controller (talvez criar um arquivo separado).

Após isso, mostrar a lógica com a qual vamos reescrever o database.json do zero.

Vamos começar com o método post.

Seguindo a ordem do controller e do router...

Implementar o getAll em seguida e explicar a validação que será feita com everyAnimal e someAnimal.

Vamos implementar a parte de filtro no middleware, que ficará apenas no método POST.

Realizar o restante do CRUD.

npm i swagger-ui-express swagger-autogen

- criar arquivos swagger.js / swagger.json e router.js 

- swagger.js 

```js
const swaggerAutogen = require("swagger-autogen");

swaggerAutogen()("./swagger.json", ["./src/routes/router.js"]);
```

- swagger.json 

```json
{

}
```

- index.js 

```js
const swaggerUI = require("swagger-ui-express");
app.use("/docs", swaggerUI.serve, swaggerUI.setup(require("../../swagger.json")));
```


!! SWAGGER VAI DAR ERRO POIS ESTAMOS VALIDANDO A API PELO NOME DO ANIMAL, JÁ QUE O /DOCS VAI ENTENDER COMO O NOME DE UM ANIMAL, PRECISAMOS TAMBEM HABILITAR O CORS EM NOSSO PROJETO

npm i cors

-> configurar no index.js

-> Allow CORS: Access-Control-Allow-Origin baixar essa extensao 