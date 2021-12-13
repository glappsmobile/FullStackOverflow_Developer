# FullStackOverflow_Developer

### Tooling:
* [Typescript](https://www.typescriptlang.org/)
* [ExpressJS](https://expressjs.com/)
* [JavaScript](https://www.javascript.com/)
* [NodeJS](https://nodejs.org/en/about/)
* [PostreSQL](https://www.postgresql.org/)

### Prerequisites
* [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/)
* [PostgreSQL](https://www.postgresql.org/)

### Repository
* Clone this repository
```sh
git clone https://github.com/glappsmobile/FullStackOverflow_Developer
```
* Install NPM packages
```sh
npm install
```

### Database
* Create the dev database using PostgreSQL
```sh
CREATE DATABASE fullstack;
```

* Import [DATABASE.sql](https://github.com/glappsmobile/FullStackOverflow_Developer/blob/main/DATABASE.sql) to the dev database 
```sh
pg_dump fullstack < path/to/DATABASE.sql
```

* Create the .env.development file in the project root, take [.env.develpment.example](https://github.com/glappsmobile/FullStackOverflow_Developer/blob/main/.env.development.example) as example.

### How to run:
To start the development server, run:
```sh
npm run dev
```
