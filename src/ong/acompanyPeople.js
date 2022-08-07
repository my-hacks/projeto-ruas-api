const { uuid } = require("../utils");

var listAcompanyPeople = [{
    "id": uuid(),
    "name": "Celso",
    "last_name": "Rodrigues da Silva",
    "status": true,
    "date_expiration": "9/23/2021",
    "last_jobs": [{
        "id": uuid(),
        "company": "Coca Cola",
        "office": "Auxiliar de manutenção",
        "date_start": "1/11/2021",
        "date_end": "5/12/2021"
    },
    {
        "id": uuid(),
        "company": "Vedatti",
        "office": "Ajudande de Pedreiro",
        "date_start": "2/11/2021",
        "date_end": "6/12/2021"
    },
    {
        "id": uuid(),
        "company": "Zaraplast",
        "office": "Auxiliar de Limpeza",
        "date_start": "3/11/2021",
        "date_end": "7/12/2021"
    }
    ]
},
{
    "id": uuid(),
    "name": "Maria",
    "last_name": "Vasconcellos",
    "status": false,
    "date_expiration": "9/23/2021",
    "last_jobs": [{
        "id": uuid(),
        "company": "Brasil Express",
        "office": "Auxiliar de limpeza",
        "date_start": "1/11/2021",
        "date_end": "5/12/2021"
    },
    {
        "id": uuid(),
        "company": "Habbis",
        "office": "Ajudante de cozinha",
        "date_start": "2/11/2021",
        "date_end": "6/12/2021"
    },
    {
        "id": uuid(),
        "company": "Solotica",
        "office": "Operadora de máquina",
        "date_start": "3/11/2021",
        "date_end": "7/12/2021"
    }
    ]
},
{
    "id": uuid(),
    "name": "Eliete",
    "last_name": "Maciel",
    "status": false,
    "date_expiration": "9/23/2021",
    "last_jobs": [{
        "id": uuid(),
        "company": "Lojas Marabras",
        "office": "Auxiliar de limpeza",
        "date_start": "1/11/2021",
        "date_end": "5/12/2021"
    },
    {
        "id": uuid(),
        "company": "Atlas Hotel",
        "office": "Diarista",
        "date_start": "2/11/2021",
        "date_end": "6/12/2021"
    },
    {
        "id": uuid(),
        "company": "YKK",
        "office": "Auxiliar de produção",
        "date_start": "3/11/2021",
        "date_end": "7/12/2021"
    }
    ]
}
]

module.exports = listAcompanyPeople;