const { Router } = require('express');
const { Pokemon, Type } = require('../db');
const {getAllPoke, getById, getByName} = require('../middlewares/middlewares.js');
const router = Router();



router.get('/', async (req, res) => {
    const {name} = req.query;
   if(name) {
     try{
       
            const pokeName = await getByName(name)        
            return res.status(200).json(pokeName)
        
        //console.log('Name required')

    }catch(err){
        res.status(404).send({message: err.message})
    }

}
else {
    try{
        const allPoke = await getAllPoke();
        res.status(200).json(allPoke);
    }catch(err){
        console.log(err)

    }
}

   
})

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    try{
        const pokeById = await getById(id);
        res.status(200).json(pokeById)
    }catch(err){
        res.status(404).send('PokeID not found')

    }
})

router.post('/', async (req, res) => {
    const {name, img, hp, attack, defense, speed, height, weight, types} = req.body;

    if(!name || !hp || !attack || !defense || !types) return res.status(404).send('Data missing')
    try{
        
        const newPoke = await Pokemon.create({name, img, hp, attack, defense, speed, height, weight})
        //console.log(newPoke)
        await newPoke.addTypes(types)
        console.log(newPoke)
        return res.status(201).json({message: 'Pokemon created!'})
        
    }
    catch(err){
        return res.status(404).send('Something went wrong')

    }
    
})




module.exports = router;