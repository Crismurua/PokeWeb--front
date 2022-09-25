const { Sequelize } = require('sequelize');
const axios = require('axios');
const {Pokemon, Type} = require('../db')


async function pokeApi(){
    let arrayApi;
    await axios.get("https://pokeapi.co/api/v2/pokemon?limit=40")
            .then(async response => {
                let respApi = response.data.results;
                let apiPromise = respApi.map(p => axios.get(p.url));
                
                //console.log(apiPromise)

                await Promise.all(apiPromise)
                .then(poke => {
                    arrayApi = poke.map(p => {
                        return {
                            id: p.data.id,
                            name: p.data.name,
                            img: p.data.sprites.front_default,
                            hp: p.data.stats[0].base_stat,
                            attack: p.data.stats[1].base_stat,
                            defense: p.data.stats[2].base_stat,
                            speed: p.data.stats[3].base_stat,
                            height: p.data.height,
                            weight: p.data.weight,
                            types: p.data.types.map(t => {
                                return {
                                    name: t.type.name
                                }
                            })
                        }
                    })
                 
                })
                .catch(err => {
                    console.log(err);
                })
            })
            .catch(err => console.log(err));
            
        return arrayApi;

};

async function pokeDb(){
    try{
        const arrayDb = await Pokemon.findAll({include: Type})
        return arrayDb;
    }catch(err){
        console.log(err)
    }
};

async function getAllPoke(){
    try{
        let api = await pokeApi();
        let db = await pokeDb();
        return api.concat(db); 
    }
    catch(err){console.log(err)}
}

module.exports = {
            getAllPoke,
}