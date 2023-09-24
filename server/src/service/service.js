const { getDataDB, createDataDB, getByEmailDB, deleteUserDB, getUserByIdDB, updateDateUserDB } = require('../repository/repository');
const bcrypt = require('bcrypt');
const salt = 8;


async function getData() {
    const data = await getDataDB();
    return data
}

async function createData(name, surname, email, password) {
    const user = await getByEmailDB(email);

    if (user.length) throw new Error("user already exist");

    const hashPasw = await bcrypt.hash(password, salt);
    const data = await createDataDB(name, surname, email, hashPasw);

    return data
}

async function deleteUser(id) {
    const data = await deleteUserDB(id);
    return data
}

async function getUserById(id) {
    const data = await getUserByIdDB(id);
    return data
}

async function authUser(email, password) {
    const user = await getByEmailDB(email);

    if (!user.length) throw new Error('user not found');

    const hashPassw = user[0].password;
    const bool = await bcrypt.compare(password, hashPassw);

    if (!bool) throw new Error('ERROR');
    return user
}

async function updateDateUser(name, surname, email, password, id) {
    const data = await updateDateUserDB(name, surname, email, password, id);
    return data
}


module.exports = { getData, createData, deleteUser, getUserById, authUser, updateDateUser }