const { uuid } = require("../utils");

var listAcompanyPeople = [{
    "id": uuid(),
    "name": "Celso",
    "last_name": "Rodrigues da Silva",
    "status": true,
    "date_expiration": "9/23/2021",
    "last_jobs": [{
        "id": uuid(),
        "office": "Auxiliar de manutenção",
        "date_start": "1/11/2021",
        "date_end": "5/12/2021"
    },
    {
        "id": uuid(),
        "office": "Ajudande de Pedreiro",
        "date_start": "2/11/2021",
        "date_end": "6/12/2021"
    },
    {
        "id": uuid(),
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
        "office": "Auxiliar de limpeza",
        "date_start": "1/11/2021",
        "date_end": "5/12/2021"
    },
    {
        "id": uuid(),
        "office": "Ajudante de cozinha",
        "date_start": "2/11/2021",
        "date_end": "6/12/2021"
    },
    {
        "id": uuid(),
        "office": "Operadora de máquina",
        "date_start": "3/11/2021",
        "date_end": "7/12/2021"
    }
    ]
},
{
    "id": uuid(),
    "name": "Eliete",
    "last_name": "De Morena",
    "status": false,
    "date_expiration": "9/23/2021",
    "last_jobs": [{
        "id": uuid(),
        "office": "Auxiliar de limpeza",
        "date_start": "1/11/2021",
        "date_end": "5/12/2021"
    },
    {
        "id": uuid(),
        "office": "Diarista",
        "date_start": "2/11/2021",
        "date_end": "6/12/2021"
    },
    {
        "id": uuid(),
        "office": "Auxiliar de produção",
        "date_start": "3/11/2021",
        "date_end": "7/12/2021"
    }
    ]
}
]

module.exports = listAcompanyPeople;