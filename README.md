# API REST - Produtos de Informática

## Sobre o Projeto

Esta é uma API REST desenvolvida com **Node.js**.

A aplicação permite realizar operações básicas de CRUD (Create, Read, Update, Delete), possibilitando o cadastro, consulta, atualização e remoção de produtos.

---

## Tecnologias Utilizadas

* Node.js
* Express
* VS Code
* Postman (para testes das requisições)

---

## Estrutura da API

A API possui os seguintes endpoints:

### Buscar todos os produtos

```http
GET /api/produtos
```
<img width="1091" height="652" alt="get_produtos" src="https://github.com/user-attachments/assets/52ad7ab9-0bb1-4f0c-bc76-0b534ac3d946" />

---
### Buscar produto por ID

```http
GET /api/produtos/:id
```
<img width="1083" height="355" alt="get_produtos_1" src="https://github.com/user-attachments/assets/0a030cd9-e66e-4266-80d4-99af82a3dd84" />

---
### Validação de erro GET

```http
GET /api/produtos/100
```
<img width="1082" height="260" alt="get_produtos_erro" src="https://github.com/user-attachments/assets/97f69c30-8f9f-4ae8-93d6-9f0f9ff5f506" />

----
### Criar novo produto

```http
POST /api/produtos
````
<img width="1067" height="616" alt="post_produto" src="https://github.com/user-attachments/assets/d52f5159-2589-4c5f-a6de-468f45f603a6" />

---
### Validação de erro POST

```http
POST /api/produtos
````
<img width="1082" height="542" alt="post_produto_erro" src="https://github.com/user-attachments/assets/e63128f1-6876-4bfd-8050-18da4e32c456" />

---
### Atualizar produto

```http
PUT /api/produtos/:id
```
<img width="1079" height="620" alt="put_produto1" src="https://github.com/user-attachments/assets/88a2cfb0-9c3e-4a06-8bcb-ab37d7f04248" />

---
### Deletar produto

```http
DELETE /api/produtos/:id
```
<img width="1077" height="456" alt="delete_produto_1" src="https://github.com/user-attachments/assets/17c7ab5a-0a49-438a-8da1-79f6e697f88d" />

---

## Validações

A API realiza validações básicas:

* Nome deve ser uma string válida
* Preço deve ser um número maior que 0
* Categoria deve ser uma string válida

---

## Servidor

A API será executada em:

```
http://localhost:3000
```

---
## Testes

Os testes foram realizados utilizando o **Postman** para validar todos os endpoints da aplicação.

