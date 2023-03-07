# Clean Architecture base template using Fastify with Typescript

 - [x] Minimal project template following clean architecture principles
 - [x] Built in Typescript
 - [x] Blazing fast Node.js framework, Fastify
 - [x] Fancy auto generated docs using OpenAPI specification v3
 - [x] MongoDB with Mongoose for the persistence layer
 - [x] Configured with Eslint and Jest out the box
 - [x] Easy to reason about folder structure

# Overview
**Clean Architecture** is a software architecture pattern that emphasizes the separation of concerns and the independence of the various components of a software system. It was first introduced by Robert C. Martin (also known as Uncle Bob) and it has become pretty trendy recently despite the fact that he introduced it in [his blog with a post titled "The Clean Architecture" in 2012](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html). This architecture pattern is highly influenced by other patterns like Hexagonal Architecture or Onion Architecture as Robert C. Martin points out in his blog post.

 ![clean architecture](/assets/CleanArchitecture.jpeg)

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