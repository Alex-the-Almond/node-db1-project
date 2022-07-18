const express = require("express");

const actRouter = require('./accounts/accounts-router')

const server = express();

server.use(express.json());

server.use('/api/accounts', actRouter);

server.use('*', (req, res) => {
    res.status(404).json({message: "Not found"})
})

module.exports = server;
