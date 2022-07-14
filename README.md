- Criar uma API REST com 5 endPoints, sendo eles responsaveis por ler e escrever um arquivo sobre os animais da turma T07 🐶🐱

- Verbos utilizados (GET, POST, PUT, DELETE)

- GET (Receber, visualizar, listar)
- POST (Postar, enviar)
- PUT (modificar, atualizar)
- DELETE (Deletar, apagar, excluir)

## Listar Animais (getALL)
Este endpoint deve listar todos os animais registrados no nosso BD do usuario

O retorno deve ser um JSON contendo uma lista de objetos, sendo ele: { nome, idade, especie, curiosidade } e com status === 200

Caso nenhum Animal tenho sido encotrado registrado na BD, devera ser retornado status === 204

Este endpoint pode aceitar um parametro tipo que deve listar todos os Animais do tipo digitado (getAll)

## Buscar animal (por NOME)
O Endpoint de buscar, deve ser similar ao listar, porem retornando apenas o animal com o nome especificado

## Registrar animal
O endpoint de registrar animais deve enviar informacoes para o servidor no formato .json, contendo um objeto do tipo { nome, idade, especie, curiosidade }

{
    "nome": "pipoca",
    "idade": 1,
    "especie": "canino",
    "curiosidade": "gosta de pão"
}

O animal deve ser salvo em um arquivo json e deve retornar o status === 201

## Deletar animal
Caso o registro do animal tenho sido feito errado, este endpoint devera deletar o registro e retornar status === 200 em caso de sucesso ou status === 400 em caso de registro nao encontrado

## Atualizar animal
Este endpoint deve alterar o conteudo do objeto para o novo valor a ser enviado a partir de um ID. Deve retornar status === 200 e status === 404 caso o registro nao seja encontrado

