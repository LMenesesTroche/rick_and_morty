const axios = require('axios');

const URL = 'https://rickandmortyapi.com/api/character';

async function getCharById(req, res){ 

    let { id } = req.params;
    try{
        let response = await axios.get(`${URL}/${id}`);
        let { name, gender, species, origin, image, status } = response.data;
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
    } catch(error){
        console.log('TUVE UN ERROR', error);
        res.status(500).send({message:error .message});
    }
}

module.exports = getCharById;