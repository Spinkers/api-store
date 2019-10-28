# API-Store
Repositório puramente didático, com o objetivo de aprender e ensinar o básico sobre a criação de API's com Node.Js.

## Começando
Clone o projeto para a sua maquina.

### pré-requisitos

Você precisará ter instalado em sua maquina:
* Node 8.10.0 ou superior.
* MongoDB.
* Robo 3T (Opcional).
* Postman ou Insominia.
* Visual Studio Code.
* Algum navegador moderno (Chrome, Opera, Firefox).
* Yarn.

### Instalação de dependências
Simplesmente execute o seguinte comando no terminal:
```
yarn install
```

Pronto, as dependências foram instaladas!

## Rodando o projeto
Caso vá utilizar o banco de dados em localhost, certifique-se de que o mongo está rodando, inicie o mongo utilizando o comando:
```
mongod
```

Simplesmente execute o seguinte comando no terminal:
```
yarn start
```

Ou fique a vontade para utilizar o nodemon:
```
nodemon ./bin/server.js
```
## Funcionalidades

### Adicionar Produto 
**Requisição:** POST

```
http://localhost:3000/products
```
**Json:**
``` Json
{
	"title": "Cadeira Gamer",
	"description": "Mano, essa cadeira é muito gamer!",
	"slug": "cadeira-gamer",
	"price": 666,
	"active": true,
	"tags": ["Informática", "Cadeira", "Games", "Frescura"]
}
```
![Requisição POST](https://github.com/Spinkers/api-store/blob/master/img/01%20-%20POST.png?raw=true)

### Listar Produtos
**Requisição:** GET

```
http://localhost:3000/products
```
![Requisição GET](https://github.com/Spinkers/api-store/blob/master/img/02%20-%20GET.png?raw=true)

### Listar Produtos por Slug
**Requisição:** GET

```
http://localhost:3000/products/mouse-gamer
```
![Requisição GET](https://github.com/Spinkers/api-store/blob/master/img/03%20-%20GET.png?raw=true)

### Listar Produtos por Id
**Requisição:** GET

```
http://localhost:3000/products/admin/5db61daaa1c9b1318bafa2a7
```
![Requisição GET](https://github.com/Spinkers/api-store/blob/master/img/04%20-%20GET.png?raw=true)

### Listar Produtos por Tag
**Requisição:** GET

```
http://localhost:3000/products/tags/Mouse
```
![Requisição GET](https://github.com/Spinkers/api-store/blob/master/img/05%20-%20GET.png?raw=true)