
# Desafio-FullStack-backend

## 1 - Sobre

A API de Cadastro de Clientes e Contatos é um sistema que permite criar, consultar, atualizar e excluir informações de clientes e seus contatos. Os clientes são registrados com dados como nome completo, e-mail, telefone e data de registro. Os contatos, vinculados aos clientes, também possuem informações como nome completo, e-mail, telefone e data de registro. A API oferece operações de CRUD, além de um recurso para gerar relatórios com os dados do cliente e seus contatos. A documentação da API inclui informações sobre os endpoints, estruturas de dados, exemplos de uso e configuração do ambiente. O objetivo é fornecer uma solução simples e eficiente para o gerenciamento de clientes e contatos, garantindo a organização e segurança das informações.

--- 

## 2 - Tecnologias

Um pouco das tecnologias que foram utilizadas no projeto: 

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)
- [Zod](https://zod.dev/?id=table-of-contents)
- [Bcryptjs](https://www.npmjs.com/package/bcrypt)

A URL base da aplicação:
https://fullstack-backend-nwtf.onrender.com/
---

## 3 - Diagrama 

Diagrama da API definindo as relações entre as tabelas do banco de dados.

![DER](DER.png)

---

## 4 - Instalação e uso

### Requisitos:
- [NodeJS](https://nodejs.org/en/)
- [Npm](https://www.npmjs.com) ou [yarn](https://yarnpkg.com)
- Banco de dados [PostgreSQL](https://www.postgresql.org)

Clone o projeto em sua máquina e instale as dependências com o comando:

```shell
yarn ou npm install
```

Em seguida, crie um arquivo **.env**, copiando o formato do arquivo **.env.example**:
```
env.example -> .env
```
Configure as variáveis de ambiente com suas credenciais do Postgres e uma nova database da sua escolha.

Execute as migrations com o comando:

```
yarn typeorm migration:run -d src/data-source.ts
ou
npx typeorm migration:run -c src/data-source.ts

```

Para rodar o servidor localmente: 

```
yarn dev ou npm run dev
```

---

## 5 - Endpoints

| Método   | Rota         | Descrição                                 |
|----------|--------------|-------------------------------------------|
| POST     | /clients     | Criação de um cliente.                    |
| PATCH    | /clients/id  | Edita o cliente.                          |
| DELETE   | /clients/id  | Deleta o cliente.                         |
| POST     | /login       | Retorna o token.                          |
| POST     | /contacts    | Cria um contato para o cliente.           |
| GET      | /contacts    | Lista todos os contatos do clientecliente.|     |
| GET      | /contacts/id | Retorna o contato específico do cliente.  |
| PATCH    | /contacts/id | Edita o contato específico do cliente.    |
| DELETE   | /contacts/id | Deleta o contato específico do cliente.   |

---

#### As requisições podem ser testadas em programas como o [Insomnia](https://insomnia.rest/download), [Postman](https://www.postman.com), etc!

---

### CREATE CLIENT

### `/clients`

#### Não é necessário autenticação
#### Todos os campos são obrigatórios

- name - STRING, LENGTH(45) 
- email - STRING, EMAIL, LENGTH(45)
- password - STRING, LENGTH(20)
- phone - STRING, LENGTH(12)

### Retorno esperado
**STATUS 201**

```json
{
	"id": "39e60115-0aa2-4064-8083-b6c3ec8f9b2f",
	"name": "Camila",
	"email": "camila@gmail.com",
	"phone": "27925555574",
	"createdAt": "2023-06-01"
 }
```
---

### LOGIN

### `/login`

### Não é necessário autenticação
### Todos os campos são obrigatórios

- email - STRING
- password - STRING

### Retorno esperado
**STATUS 200**

```json
 {
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRvdWdsYXNwYXRoQGdtYWlsLmNvbSIsImlhdCI6MTY4NDk4NDY1NiwiZXhwIjoxNjg1MDcxMDU2LCJzdWIiOiI4MTkyMTFhMy00NThjLTQ3NjktOTcxOS0xMmM2NTdhYTNkMzQifQ.VC4dYCkPL2b3Lxjvd-VK8gd9bcP7pUcdA113Ejmk_Kc"
 }
 ```
 ---
 
 ### EDIT CLIENT 
 
 ### `/clients/id`
 
 ### É necessário autenticação
### Campos opcionais

-  name: STRING, LENGTH(45)
-  email: STRING, LENGTH(45)
-  password: STRING, LENGTH(20)
-  phone - STRING, LENGTH(12)

### Retorno esperado
**STATUS 200**

```json
{
	"id": "997f51dda5a-42ab-aa4a-da6a6d2b4ad6",
	"name": "Camila Tavares",
	"email": "camilatavares@gmail.com",
	"phone": "27995555574",
	"createdAt": "2023-06-01"
}
```
---

### DELETE CLIENT 

### `/clients/id`

### É necessário autenticação

### Retorno esperado
**STATUS 204**

---

### CREATE CONTACT

### `/contacts`

### É necessário autenticação
### Campos obrigatórios

- full_name - STRING, LENGTH(45) 
- email - STRING, EMAIL, LENGTH(45)
- phone - STRING, LENGTH(12)

### Retorno esperado
**STATUS 201**

```json
{
	"id": "47d00323-2189-4c-a99e-df9659c6d192",
	"full_name": "teste de contato",
	"email": "contato@gmail.com",
	"phone": "12345678987",
	"createdAt": "2023-06-01"
	"client": {
		"id": "819211a3-8c-4769-9719-12c657aa3d34",
		"name": "Usuário",
		"email": "usuário@gmail.com",
		"phone": "27998555574",
		"createdAt": "2023-06-01"
   }
}
```

---

### LIST CONTACTS

### `/contacts`

### É necessário autenticação

### Retorno esperado
**STATUS 200**

```json

	{
		"id": "9136da3e-2025-48c6-80e9-17c56fcda4a6",
		"full_name": "teste de contato",
		"email": "contato1@gmail.com",
		"phone": "12345678987",
		"createdAt": "2023-06-01"
	},
	{
		"id": "3e0b732d-12c5-4cde-a3bc-0f5f76504509",
		"full_name": "teste de contato",
		"email": "contato2@gmail.com",
		"phone": "12345678987",
		"createdAt": "2023-06-01"
	}
  ```
  ---
  
### LIST CONTACT PER ID

### `/contacts/id`

### É necessário autenticação 
Retorna um único contato do usuário passado na URL
### Retorno esperado



**STATUS 200**

```json
{
	"id": "47d00323-2189-4c-a99e-df9659c6d192",
	"full_name": "teste de contato",
	"email": "contato@gmail.com",
	"phone": "12345678987",
	"createdAt": "2023-06-01"
	"client": {
		"id": "819211a3-8c-4769-9719-12c657aa3d34",
		"name": "Usuário",
		"email": "usuário@gmail.com",
		"phone": "27998555574",
		"createdAt": "2023-05-25"
   }
}
```
---

### EDIT CONTACT PER ID

### `/contacts/id`

### É necessário autenticação
Atualiza o contato passado na URL

### Campos opcionais
-  name: STRING, LENGTH(45)
-  email: STRING, LENGTH(45)
-  phone - STRING, LENGTH(12)

### Retorno esperado
**STATUS 200**
```json
{
	"id": "47d00323-2189-4c-a99e-df9659c6d192",
	"full_name": "teste de contato",
	"email": "contato@gmail.com",
	"phone": "12345678987",
  	"createdAt": "2023-06-01"
	"client": {
		"id": "819211a3-8c-4769-9719-12c657aa3d34",
		"name": "Usuário",
		"email": "usuário@gmail.com",
		"phone": "27998555574",
		"createdAt": "2023-05-25"
   }
}
  ```
  ---
  
  ### DELETE CONTACT PER ID
  
  ### `/contacts/id`
  
  ### É necessário autenticação
Deleta o contato passado na URL

### Retorno esperado
**STATUS 204**




