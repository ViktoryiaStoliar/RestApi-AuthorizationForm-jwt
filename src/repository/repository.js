const pool = require('../db');

async function getDataDB() {
    const client = await pool.connect();
    const sql = 'select * from users';
    const data = (await client.query(sql)).rows;
    return data
}

async function createDataDB(name, surname, email, password) {
    const client = await pool.connect();
    const sql = 'insert into users (name, surname, email, password) values ($1, $2, $3, $4) returning*';
    const data = (await client.query(sql, [name, surname, email, password])).rows;
    return data
}

async function getByEmailDB(email) {
    const client = await pool.connect();
    const sql = 'select * from users where email = $1';
    const data = (await client.query(sql, [email])).rows;
    return data
}

async function deleteUserDB(id) {
    const client = await pool.connect();
    const sql = 'delete from users where id = $1 returning*';
    const data = (await client.query(sql, [id])).rows;
    return data
}

async function getUserByIdDB(id) {
    const client = await pool.connect();
    const sql = 'select * from users where id = $1';
    const data = (await client.query(sql, [id])).rows;
    return data
}

async function updateDateUserDB(name, surname, email, password, id) {
    const client = await pool.connect();
    const sql = 'update users set name=$1, surname=$2, email=$3, password=$4 where id = $5 returning*';
    const data = (await client.query(sql, [name, surname, email, password, id])).rows;
    return data
}

module.exports = { getDataDB, createDataDB, getByEmailDB, deleteUserDB, getUserByIdDB, updateDateUserDB }