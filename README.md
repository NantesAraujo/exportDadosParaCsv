# Adonis fullstack application

This is the fullstack boilerplate for AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Session
3. Authentication
4. Web security middleware
5. CORS
6. Edge template engine
7. Lucid ORM
8. Migrations and seeds

### Setup

Este projeto utiliza um framework javaScript AdonisJS, necessário a instalação do mesmo no seu ambiente atraves do seguinte comando

```js
npm i -g @adonisjs/cli
```

### Migrations

Com o ambiente configurado e o framework AdonisJS instalado agora execute este comando para criar a tabelas Default no banco de Dados.
Este projeto utiliza Banco de Dados PostgreSQL

```js
adonis migration:run
```

após executar este comando as tabelas default ('users', 'token') serão criadas automaticamente, a tebela utiliza neste exemplo foi a de usuários e os os dados foram inseridos manualmente no banco de dados atraves do comando INSERT.

## Start project

Use o seguinte comando para subri o projeto

```bash
adonis serve --dev
```

or manually clone the repo and then run `npm install`.