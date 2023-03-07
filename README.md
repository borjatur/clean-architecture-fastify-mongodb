# Clean Architecture base template using Fastify with Typescript

 - [x] Minimal project template following clean architecture principles
 - [x] Built in Typescript
 - [x] Blazing fast Node.js framework, Fastify
 - [x] Fancy auto generated docs using OpenAPI specification v3
 - [x] MongoDB with Mongoose for the persistence layer
 - [x] Configured with Eslint and Jest out the box
 - [x] Easy to reason about folder structure (more in the project readme)

## Project folder structure

```
├── src
│   ├── core (Entities and use cases)
│   │   ├── entities     (Entities)
│   │   ├── repositories (Contract Interfaces)
│   │   └── services     (Use cases)
│   ├── infrastructure (Controllers, Gateways, Presenters)
│   │   ├── database (Data access objects)
│   │   │   ├── <entity>
│   │   │   │   ├── <entity>.dao.ts
│   │   │   │   └── <entity>.schema.ts
│   │   ├── http (Fastify framework related code)
│   │   │   ├── controllers
│   │   │   ├── plugins
│   │   │   ├── routes
│   │   │   ├── schemas
│   │   │   └── server
│   │   │       └── index.ts
│   │   └── repositories (Implementation of Contract Interfaces defined in core)
│   └── main.ts (application entry point)
├── tests
│   └── test.spec.ts
```

## Getting started
* docker-compose up -d
* npm install
* npm run build && npm start
* visit http://localhost:5050/docs and enjoy!