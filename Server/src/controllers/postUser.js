const { User } = require("../DB_connection");

const postUser = async (req, res) =>{
        //sacamos el  email y password
        const { email, password } = req.body;
        
        if(!email || !password){
            res.status(400).json("Faltan datos");
        } 
        // return res.status(500).json({ email, password  });
        try{
            const user = await User.findOrCreate({ where:{ email },defaults:{ password } });
            return res.json(user)        
        }catch(error){
            return res.status(500).json({ error:error.message  });
        }
        
}

module.exports= postUser;
