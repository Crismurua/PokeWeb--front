const { Router } = require('express');
const { Pokemon } = require('../models/Pokemon.js');
const {getAllPoke} = require('../middlewares/middlewares.js');
const router = Router();

router.get('/', async (req, res) => {
    try{
        const allPoke = await getAllPoke();
        res.status(200).json(allPoke);
    }catch(err){
        console.log(err)

    }
})

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    try{
        
    }catch(err){

    }
})

module.exports = router;