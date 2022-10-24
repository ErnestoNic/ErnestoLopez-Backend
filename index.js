
const Server = require('./class/server');
const fibonacciRoutes = require('./routes/fibonacci');


//INSTANCIANDO SERVIDOR WEB -> incia el server

const server = new Server ();

server.start (()=>{
    console.log("Servidor JS en linea");
})



//RUTAS DE LA APP -> rutas al Backend

server.app.use('/fibonacci', fibonacciRoutes);


