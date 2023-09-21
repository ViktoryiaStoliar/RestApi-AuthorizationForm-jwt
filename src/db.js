const {Pool} = require('pg');

const pool = new Pool ({
    port: 5432,
    password: 'Vika+Genya=88',
    host: 'localhost',
    user: 'postgres',
    database: 'Users'
})

module.exports = pool