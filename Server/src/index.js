const http = require ('http');
const data = require('./utils/data');


http.createServer((req,res)=>{
    res.setHeader("Access-Control-Allow-Origin","*");//esto le da permiso a quien sea a 

    const {url} = req;
    console.log(url)
    if(url ==="/" ){
        //Si la url es igual a / entonces
        res.writeHead(200,{"Content-Type":"text/plain" })
        //Devolver "Esta llegando una peticion"
        return res.end("Esta llegando una peticion")
    }
    
    let separado = url.split("/");
    let id = separado.pop().split('').pop();
    let verificacion = separado.join("/");
    if(verificacion ==="/rickandmorty/character" ){// verifico que el url este bien pasado

        console.log("verificado ") // mando a la consola una verificacion

        //Lo encuentro el character
        const character = data.find(character => character.id.toString() === id);
        if(character  === undefined){
            res.writeHead(200,{"Content-Type":"text/plain" })
            return res.end("No se encontro tu numero")            
        }
        //Lo retorno el character
        res.writeHead(200,{"Content-Type":"application/json" })
        return res.end(JSON.stringify(character))
    }

    res.writeHead(404);
    res.end();
})

.listen(3001,'localhost');
