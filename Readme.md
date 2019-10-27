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

### POST 
**Requisição:** POST
**URL:**
```
http://localhost:3000/products
```
**Json:**
``` Json
{
	"title": "Mouse Gamer",
	"description": "Mano, esse mouse é muito massa!",
	"slug": "mouse-gamer",
	"price": 299,
	"active": true,
	"tags": ["Informática", "Mouse", "Games"]
}
```
![Requisição POST](https://github.com/Spinkers/api-store/blob/master/img/01%20-%20POST.png?raw=true)