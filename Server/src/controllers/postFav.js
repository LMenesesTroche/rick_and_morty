const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
    try {
        
        const { id, name, species , image } = req.body;
    
        // Verificamos que estén llegando todos los datos
        if (!id || !name || !image || !species ) {
            return res.status(401).json("Faltan datos");
        }

        // Si llegan todos los datos, agregamos un favorito a mi modelo favorite
        await Favorite.findOrCreate({
            where: { id,  name, image, species  },
            defaults: { id, name, image, species  }
        });
        const allFavs = await Favorite.findAll();

        return res.status(200).json({ allFavs });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

};

module.exports = postFav;
