const express = require('express');
const routes = express.Router();
const companies = require('./company');

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

module.exports = routes;