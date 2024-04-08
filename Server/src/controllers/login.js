const { User } = require("../DB_connection");

//Esta es una funcion que verifica que haya un usario con el email que nos manden
// y verifica la contraseña
async function login (req, res){
    try {
        const { email, password } = req.body;
        if(!email || !password){
            return res.status(400).json({ error: "faltan datos"});
        }
        //Buscamos un usario con el email que nos proporcionan si no existe la const 
        // sera undefined 
        const user = await User.findOne({ where: { email }}); 
        
        if(!user){//Si no hay el usario entonces
            return res.status(404).json({ message: "Usario no encontrado"});
        }
        //Si no coincide la Contraseña
        if(password !== user.password){
            return res.status(403).json({ message: "Contraseña incorrecta"})
        }

        //Si coinciden, dar acceso
        return res.json({ access:true });

    }catch(error){
        console.error("Error en la autenticacion", error);
        return res.status(500).json({ message: error.message });
    }
}

module.exports = login;