const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {

    try {
        
        const { id, name, status, species, gender, origin , image } = req.body;
    
        // Verificamos que estén llegando todos los datos
        if (!id || !name || !origin || !status || !image || !species || !gender) {
            return res.status(401).json("Faltan datos");
        }
        // Si llegan todos los datos, agregamos un favorito a mi modelo favorite
        await Favorite.findOrCreate({
            where: { name, origin, status, image, species, gender },
            defaults: { name, origin, status, image, species, gender }
        });

        const allFavs = await Favorite.findAll();
        return res.status(200).json({ allFavs });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

};

module.exports = postFav;
