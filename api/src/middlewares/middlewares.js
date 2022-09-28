const { Sequelize } = require('sequelize');
const axios = require('axios');
const {Pokemon, Type} = require('../db')


async function pokeApi(){
    let arrayApi = [];
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
        const arrayDb = await Pokemon.findAll({include: {
            model : Type,
            attributes: ["name"],                                        
            through: {
                attributes:[],
            }
        }})
        return arrayDb;
    }catch(err){
        console.log(err)
    }
};

async function getAllPoke(){
    try{
        let api = await pokeApi();
        let db = await pokeDb();
        if(db && api) return api.concat(db);
        else return api; 
    }
    catch(err){console.log(err)}
}


async function getById(id){
    
    try{
        if(id<=40){
           // console.log('entre al if de id api')
            const apiPoke = await pokeApi();
            //console.log(id)
            //console.log(apiPoke)

             for(let i=0;i<apiPoke.length;i++){
                 if(apiPoke[i].id == id) return apiPoke[i];
             }
            //  let pokeId = apiPoke.find(p => {
            //      //console.log('entre al find')
            //     p.id.toString() == id.toString()
            //     //console.log(p.id)      
            //  })
            //  if(pokeId.length){
            //      return pokeId
            //  }
            console.log('no se encontro el pokemon')            
        }
        else {
            const dbPoke = await Pokemon.findByPk(id, {include: Type})
            return dbPoke;
        }
    }catch(err){
        console.log('Invalid ID!')
    }
}

async function getByName(name){
    try{
        let allPoke = await getAllPoke();
        for(let i=0;i<allPoke.length;i++){
            if(allPoke[i].name == name) return allPoke[i];
        }
        console.log(pokeName)
       
    }catch(err){
        throw new Error('No se ha encontrado un Pokemon con ese name')
    }
}

module.exports = {
            getAllPoke,
            getById,
            getByName
}