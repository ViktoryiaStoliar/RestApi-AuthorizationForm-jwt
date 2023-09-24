const route = require('express').Router()
const { getData, createData, deleteUser, getUserById, authUser, updateDateUser } = require('../service/service');

route.get('/', async (req, res) => {
    try {
        const data = await getData();
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

route.post('/', async (req, res) => {
    try {
        const { name, surname, email, password } = req.body;
        const data = await createData(name, surname, email, password);
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

route.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = await deleteUser(id);
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

route.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = await getUserById(id);
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

route.post('/auth', async (req, res) => {
    try {
        const { email, password } = req.body;
        const data = await authUser(email, password);
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

route.put('/:id', async (req, res) => {
    try {
        const { name, surname, email, password } = req.body;
        const { id } = req.params;
        const data = await updateDateUser(name, surname, email, password, id);
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

module.exports = route