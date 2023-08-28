# Animal Management API - Backend Project

Este projeto consiste na criação de uma API REST que permite gerenciar informações sobre os animais da turma. A API disponibiliza quatro endpoints que utilizam os verbos HTTP: GET, POST, PUT e DELETE para ler e escrever informações sobre os animais.

## Endpoints

### Listar Animais (GET - getAll)
Este endpoint permite listar todos os animais registrados no banco de dados do usuário.

- **URL:** `/animais`
- **Método:** GET
- **Parâmetros de URL opcionais:** `tipo` (para filtrar animais por tipo)
- **Resposta bem-sucedida (200):** Retorna um JSON contendo uma lista de objetos com os campos { nome, idade, especie, curiosidade }.
- **Resposta sem animais registrados (204):** Retorna um código de status 204 se nenhum animal for encontrado.

### Buscar Animal por Nome (GET - getByNome)
Este endpoint permite buscar um animal pelo nome especificado.

- **URL:** `/animais/:nome`
- **Método:** GET
- **Parâmetros de URL:** `nome` (nome do animal a ser buscado)
- **Resposta bem-sucedida (200):** Retorna um JSON contendo os detalhes do animal especificado { nome, idade, especie, curiosidade }.
- **Resposta sem resultado (404):** Retorna um código de status 404 se o animal não for encontrado.

### Registrar Animal (POST - registrar)
Este endpoint permite registrar um novo animal.

- **URL:** `/animais`
- **Método:** POST
- **Corpo da requisição:** JSON no formato { nome, idade, especie, curiosidade }
- **Resposta bem-sucedida (201):** Retorna um código de status 201 após registrar o animal com sucesso.

```json
{
    "nome": "pipoca",
    "idade": 1,
    "especie": "canino",
    "curiosidade": "gosta de pão"
}
```
### Deletar Animal (DELETE - deletar)
Este endpoint permite deletar um animal registrado.

- **URL:** `/animais/:id`
- **Método:** DELETE
- **Parâmetros de URL:** `id` (identificador único do animal a ser deletado)
- **Resposta bem-sucedida (200):** Retorna um código de status 200 após deletar o animal com sucesso.
- **Resposta sem resultado (404):** Retorna um código de status 404 se o animal não for encontrado.

### Atualizar Animal (PUT - atualizar)
Este endpoint permite atualizar as informações de um animal existente.

- **URL:** `/animais/:id`
- **Método:** PUT
- **Parâmetros de URL:** `id` (identificador único do animal a ser atualizado)
- **Corpo da requisição:** JSON contendo as informações atualizadas do animal { nome, idade, especie, curiosidade }
- **Resposta bem-sucedida (200):** Retorna um código de status 200 após atualizar o animal com sucesso.
- **Resposta sem resultado (404):** Retorna um código de status 404 se o animal não for encontrado.
