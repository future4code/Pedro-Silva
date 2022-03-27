# Projeto Case RedFox 

Concluído. 

### Sobre o Projeto

O projeto RedFox é um case que tem como objetivo a construção de uma API(API REST) que funciona fornecendo pokemons e informações sobre eles disponíveis no banco de dados MySQL. Dentro disso, os endpoints funcionam a partir de lógicas de listagens, filtros e paginação. O código foi escrito a partir do paradigma de Programação Orientada à Objeto, buscando a utilização de conceitos de Clean Architecture e Clean Code e os princípios SOLID. Também foram realizados testes unitários através do Jest. Deploy do projeto feito no Heroku.

A partir do código foi realizado também listagens, filtragens e ordenações. 
Se o valor(query) size não for passada o valor será 20. Como descrito na documentação da API.
Se o valor(query) page não for passada o valor será 1.
Se o valor(query) order não for passado ou for atribuído um valor inválido, ele será "ASC". Apenas "ASC" e "DESC" são válidos.

### Funcionalidades 

- Pegar Pokemons
- Pegar Pokemons pelo nome 
- Pegar Pokemons por geração 
- Pegar Pokemons por tipo 
- Pegar Pokemons pelo número da pokedex 

### Tecnologias Utilizadas:

- Node.Js
- TypeScript
- Knex
- MySQL
- Express
- Cors
- Jest

### Documentação da API 

https://documenter.getpostman.com/view/18388200/UVyn3JrK

### Desenvolvido por 

Pedro Henrique Duarte