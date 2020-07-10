require('dotenv').config();
const express = require('express');
const app = express();

const server = require('../database');

server.applyMiddleware({ app, path: '/api' });

const port = process.env.PORT || 4000;

app.get('/', (req, res) => res.send('<h1>Hello Nodemon!!!</h1>'));
app.listen(port, () => console.log(`GraphQL Server running on port ${port}${server.graphqlPath}`));
