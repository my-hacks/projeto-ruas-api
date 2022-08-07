const express = require('express');
const routes = express.Router();
const companies = require('./company');
const listMyEmployees = require('./myEmployees');

routes.get('/', function(req, res){
    res.send(companies);
})

routes.post('/createJob', (req, res) => {
    const data = req.body;
    if(!data) {
        res.send('Nao foram encontrados dados')
    }
    companies.push(data)
    res.send({
        message: 'vaga cadastrada',
        data: companies
    })
})

routes.get('/listJobs', (req, res) => {
    if(companies.length > 0) {
        res.send({
            message: "Lista de vagas cadastradas: ",
            data: companies
        })
    } else {
        res.send({
            message: 'Não há vagas cadastradas'
        })
    }
})

routes.get('/listMyEmployees', (req, res) => {
    if(listMyEmployees.length > 0){
        res.send({
            message: "Lista de funcionários registrados na empresa: ",
            data: listMyEmployees
        })
    }else{
        res.send({
            message : 'Não existem nenhum funciário resgistrado na empresa'
        })
    }
})

module.exports = routes;