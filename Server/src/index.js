const http = require ('http');
const port = 3001;
const getCharById = require('./controllers/getCharById');

const server = http.createServer((req,res)=>{
    //Logica del servidor
    res.setHeader("Access-Control-Allow-Origin","*");//esto le da permiso a quien sea a 

    if(req.url.includes('/rickandmorty/character')){
        
        return getCharById(req, res)
    }
    res.writeHead(200, { 'Content-Type' : 'text/plain' });
    return res.end('Hola te eh escuchado!! ');
});

server.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port} /`);
    //Logica qye se ejecuta cuando el serv se levanta
})
