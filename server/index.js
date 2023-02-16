const express = require('express');
const app = express();
const port = 3001;


const beneficios = [
    {
      "id": 1,
      "title": "Desconto em academia",
      "description": "Ganhe até 70% de desconto em academias parceiras.",
      "gategory": "Saúde"
    },
    {
      "id": 2,
      "title": "Desconto em mercado",
      "description": "Ganhe até 50% de desconto em mercados parceiros. faça seu cadastro e aproveite.",
      "gategory": "Alimentação"
    },
    {
      "id": 3,
      "title": "Desconto em farmácia",
      "description": "Faça seu cadastro e ganhe até 30% de desconto em farmácias parceiras.",
      "gategory": "Saúde"
    },
    {
      "id": 4,
      "title": "Descontode 100% em Jipe",
      "description": "Ganhe até 100% de desconto* em Jipe.",
      "gategory": "Automóveis"
    }
  ]


app.get('/beneficios', (req, res) => res.json(beneficios));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

