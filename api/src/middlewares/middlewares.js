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
                            img: p.data.sprites.other["official-artwork"].front_default,
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
    //console.log(typeof id)
    
    try{
        
        
        if(id.length <= 4){
        const apiPoke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            return {
                id: apiPoke.data.id,
                name: apiPoke.data.name,
                img: apiPoke.data.sprites.other["official-artwork"].front_default,
                hp: apiPoke.data.stats[0].base_stat,
                attack: apiPoke.data.stats[1].base_stat,
                defense: apiPoke.data.stats[2].base_stat,
                speed: apiPoke.data.stats[3].base_stat,
                height: apiPoke.data.height,
                weight: apiPoke.data.weight,
                types: apiPoke.data.types.map(t => {
                                return {
                                    name: t.type.name
                                }
                            })
            }

                      
        
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
    //console.log(name) ok 
    try{
        const apiPoke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if(apiPoke){
            return {
                id: apiPoke.data.id,
                name: apiPoke.data.name,
                img: apiPoke.data.sprites.other["official-artwork"].front_default,
                hp: apiPoke.data.stats[0].base_stat,
                attack: apiPoke.data.stats[1].base_stat,
                defense: apiPoke.data.stats[2].base_stat,
                speed: apiPoke.data.stats[3].base_stat,
                height: apiPoke.data.height,
                weight: apiPoke.data.weight,
                types: apiPoke.data.types.map(t => {
                                return {
                                    name: t.type.name
                                }
                            })
            }
        }
        //console.log(apiPoke[i])

       
            const dbPoke = await Pokemon.findOne({where:{name}}, {include: Type})
            return dbPoke;
        
    
    }catch(err){
        throw new Error('No se ha encontrado un Pokemon con ese name')
    }
}

module.exports = {
            getAllPoke,
            getById,
            getByName,
            pokeDb,
            pokeApi
}