# Communications API - Express API - Showcase Project

User Stories:

1. As a user, I want to see all Conversation Messages in descending order by date.
2. As a user, I want to see the type of the Conversation Message for each record. "SMS" or "Phone Call."
3. As a user, I want to see only the Conversation Messages from a specific phone number

Derived Requirements:

- Create an API that returns both sms and voice_calls sorted by datetime in descending order.
    - Support returning the type of conversation
    - Support searching for conversations from a specific phone nubmer

## Version
0.0.1

## Working Demo
- https://communications-api.onrender.com/
    - Deployed to free plan at https://render.com/, which is why the first cold-boot start-up is slow

## Tech
* [Express] - Fast, unopinionated, minimalist web framework for Node.js
* [Sequelize] - A modern TypeScript and Node.js ORM for Oracle, Postgres, MySQL, MariaDB, SQLite and SQL Server, and more
* [tsx] - TypeScript Execute (tsx): Node.js enhanced with esbuild to run TypeScript & ESM files
* [Typescript] - An open-source language which builds on JavaScript.

## Running locally
- git clone https://github.com/shahmirn/communications-api
- cd communications-api
- npm install
- npm run dev
- Go to http://localhost:4000/

## Todo's
- Add unit tests
- Add query param validation

## References:

- https://expressjs.com/en/starter/generator.html
- https://www.bezkoder.com/node-js-express-sequelize-mysql/
- https://sequelize.org/docs/v6/getting-started/

[Express]:https://expressjs.com/
[Sequelize]:https://sequelize.org/
[tsx]:https://github.com/esbuild-kit/tsx
[Typescript]:https://www.typescriptlang.org/
