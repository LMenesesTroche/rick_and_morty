const { Favorite } = require("../models/Favorite")

const deleteFav = async (req, res) =>{
  
  //Debo eliminar el personaje que me manden por id
  try{
      const { id } = req.params;
        await Favorite.destroy({
            where: { id },
          });
        const allFavs = Favorite.findAll();
        return res.status(200).json(allFavs)
    }catch(error){
        res.status(500).json({error: error.message})
    }

}

module.exports= deleteFav;
