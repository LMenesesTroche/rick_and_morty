//Esto es 

const server = require('./app');
const PORT = 3001;
const { conn }  = require('./DB_connection');

conn.sync({ force: true }).then(()=>{
   console.log("Se conecto exitosamente mi DB")
   server.listen(PORT, () => {
      console.log('Server raised in port: ' + PORT);
   });

})

