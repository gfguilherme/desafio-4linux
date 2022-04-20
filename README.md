# Desafio 4Linux

<p align="center">Desafio 4Linux</p>

<p align="center">
 <a href="#objetivos">Objetivos</a> •
 <a href="#abordagem">Abordagem</a> •
 <a href="#desafios">Desafios</a> •
 <a href="#resultado-do-desafio">Resultado do desafio</a> •
 <a href="#tecnologias">Tecnologias</a> 
 
</p>

## Objetivos
 - [x] Desenvolver um front-end
 - [x] Desenvolver um back-end
 - [x] Implementar autenticação de usuário
 - [x] Consumir a PublicAPIs
 - [x] Implementar rotas privdas para usuários autenticados
 - [x] Deploy da aplicação utilizando docker

### Abordagem
Desenvolvido o front-end utilizando TypeScript e React em conjunto de uma API RESTful em TypeScript, rodando em Node.js, utilizando o framework Express para autenticação de usuários. Utilizado do cliente HTTP baseado-em-promessas Axios para realizar requisições a API PublicAPIs. Implementado acesso de rotas restritas para usuários autenticados atráves da biblioteca react-router-dom. Orquestrado containers para a aplicação cliente e servidor utilizando docker e docker-compose.

### Desafios
Não houve dificuldade quanto a utilização do sistema operacional Debian devido a minha convivência em sistemas baseados em Linux. Quanto ao Docker, não havia tido contato com utilização de containers previamente, apesar disso, foi realizado a orquestração e execução dos containers. Entretando, após realizar o deploy no servidor, o front-end não conseguiu mais realizar uma conexão com a API desenvolvida. Despendi horas procurando uma solução, mas não obtive sucesso.
 
## Resultado do desafio
 - [x] Aplicação front-end funcionando e rodando na porta 80 no servidor solicitado
 - [ ] Aplicação back-end funcionando e rodando na porta 3001 no servidor solicitado
 - [ ] Aplicação front-end se comunicando com a API desenvolvida

### Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://pt-br.reactjs.org/)
- [Axios](https://axios-http.com/docs/intro)
- [MUI](https://mui.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Docker](https://www.docker.com/)
- [Express.js](https://expressjs.com/pt-br/)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [React Router](https://reactrouter.com/)
