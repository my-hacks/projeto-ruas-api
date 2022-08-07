const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.all('/*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "X-Requested-With")
    next();
})

const companyRoutes = require('./src/company');
const ongRoutes = require('./src/ong');

app.get('/', function(req, res){
    res.send({
        status: "OK"
    })
})

app.use('/company', companyRoutes);
app.use('/ong', ongRoutes);

var PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
    console.log('executing back-end now');
})