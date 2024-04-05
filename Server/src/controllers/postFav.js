const { Favorite } = require("../models/Favorite")

const postFav = async (req, res) => {
            // res.status(500).json("holis")

    // try{
        const { id, name, origin, status, image ,species ,gender } = req.body;
        //verificamos que esten llegando todos los datos
        if(!id ||!name || !origin|| !status || !image || !species || !gender ){
            res.status(401).json("faltan datos")
            //Si llegan todos los datos agregamos un favorito a mi modelo favorite
        }
        try{
            await Favorite.findOrCreate({
                where:{ name, origin, status, image ,species ,gender },
                defaults: { name, origin, status, image ,species ,gender }
            });
            const allFavs = await Favorite.findAll();
            return res.status(200).json({ allFavs })

        }catch(error){
        res.status(500).json({ error:error.message })
        }

}

module.exports = postFav ;