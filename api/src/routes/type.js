const { Router } = require('express');
const axios = require('axios');
const { Type } = require('../models/Type.js');
const router = Router();

router.get('/', (req, res) => {
    axios.get('https://pokeapi.co/api/v2/type')
    .then(r => r.json())
    .then(response => {
        response.data.results.forEach(e => {
            let found = Type.findAll({where: {name: e.name}})
            found ? res.json(Type.findAll()) : Type.create({name: e.name})
        }).catch(err => console.log(err))
    })
})


module.exports = router;