const express = require('express')
const routes = express.Router();
const listPersons = require('./ong')
const listLastVisits = require('../ong/lastVisit')
const listMyJobs = require('../ong/myJobs')
const listReferencesJobs = require('../ong/referencsJobs')
const listAcompanyPeople = require('../ong/acompanyPeople')

routes.post('/createPerson', (req, res) => {
    const data = req.body;
    if (!data) {
        res.send({
            message: "Não foram encontrado dados"
        })
    } else {
        listPersons.push(data)
        res.send({
            message: "A pessoa foi cadastrada",
            data: listPersons
        })
    }
})

routes.get('/listPersons', (req, res) => {
    if (listPersons.length > 0) {
        res.send({
            menssage: "Lista de pessoas da ONG: ",
            data: listPersons
        })
    } else {
        res.send({
            erro: "Não existe pessoas cadastradas"
        })
    }
})

routes.get('/listLastVisits', (req, res) => {
    if (listLastVisits.length > 0) {
        res.send({
            message: "Lista de visitas na ONG: ",
            data: listLastVisits
        })
    } else {
        res.send({
            erro: "Não houveram visitas na ONG"
        })
    }
})

routes.get('/listMyJobs', (req, res) => {
    if (listMyJobs.length > 0) {
        res.send({
            message: "Lista de vagas registradas: ",
            data: listMyJobs
        })
    } else {
        res.send({
            message: "Não há vagas resgistradas para esssa empresa"
        })
    }
})

routes.get('/listReferencesJobs', (req, res) => {
    if (listReferencesJobs.length > 0) {
        res.send({
            menssage: "Lista de vagas de referências: ",
            data: listReferencesJobs
        })
    } else {
        res.send({
            message: "Não há referências para esta pessoa"
        })
    }
})

routes.get('/listAcompanyPeople', (req, res) => {
    if (listAcompanyPeople.length > 0) {
        res.send({
            menssage: "Lista de acompanhamentos das pessoas: ",
            data: listAcompanyPeople
        })
    } else {
        res.send({
            message: "Não há registros de acompanhamento de pessoa"
        })
    }
})

module.exports = routes;