const { Router } = require('express');
const axios = require('axios');
const { Type } = require('../db');
const router = Router();

router.get('/', async (req, res) => {
    try{
        let arrTypes = await Type.findAll();
        if(arrTypes.length === 0){
            await axios.get('https://pokeapi.co/api/v2/type')
            .then(async response => {
                let types = response.data.results;
                arrTypes = types.map(t => {
                    return {name: t.name}
                })
                await Type.bulkCreate(arrTypes);
                

            return res.status(200).json(await Type.findAll());
        })
        .catch(err => console.log(err))

        }
        else{
            return res.status(200).json(await Type.findAll());
        }

    }
    catch(err){
        console.log(err)
    }
})


module.exports = router;