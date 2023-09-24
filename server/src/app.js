const express = require ('express');
const bodyParser = require ('body-parser');
const cors = require ('cors');
const route = require ('./controller/controller')

const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use('/user', route);
app.use((er, req, res, next) => res.status(500).send(er.message));

module.exports = app;
