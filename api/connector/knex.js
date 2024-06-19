require('dotenv').config()

const { DB_USERNAME, DB_PASSWORD, DATABASE } = process.env;

const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        port: 3306,
        user: DB_USERNAME,
        password: DB_PASSWORD,
        database: DATABASE,
    },
});

module.exports = knex;