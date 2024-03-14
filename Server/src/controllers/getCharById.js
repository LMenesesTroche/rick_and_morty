const axios = require('axios');

const URL = 'https://rickandmortyapi.com/api/character';

function getCharById(req, res){ 
    console.log("estoy aqui")
    let { id } = req.params;
    axios.get(`${URL}/${id}`)
    .then(response =>{

        //deconstruction
        let { name, gender, species, origin, image, status } = response.data;

        //revisar si tenemos un personaje
        if (name) {
            //construimos nuestro character
            let char={
                id,
                name,
                gender,
                species,
                origin: origin.name,
                image,
                status
            }
            //retornamos neustro character
            return res.status(200).json(char);            
        }else return res.status(404).send({message:'Not Found!'});
    })
    .catch(err=>{
        console.log('TUVE UN ERROR', err);
        res.status(500).send({message:err.message});
    });
}

module.exports = getCharById;