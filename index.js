const http = require("http");
const fs = require("fs");
const {Pool}= require("pg");
//const Cursor = require('pg-cursor');
    
//Configuracion de conexión
const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'deportistas',
    password:'postgres',
    port:5432,
    max:20,
    min:2,
    idleTimeoutMillis:5000,
    connectionTimeoutMillis:2000
});

//Logica API CRUD
http.createServer((req, res) => {
    
    //Respuesta al requerir ruta base
    if (req.url == '/' && req.method == 'GET') {
        res.setHeader('content-type', 'text/html')
        res.end(fs.readFileSync('./public/index.html', 'utf8'))
    };
    //Endpoint para listar deportistas que estan dentro de BD. Mismo boton debiera registrar y listar.
    if (req.url == '/registrar' && req.method == 'POST') {
        pool.connect(async(err,client,release)=>{
            if(!err){
                let sqlQuery = {
                    text:"SELECT * FROM deportistas",
                    name: 'competidores',
                    rowMode:'array'
                }
                let res = await client.query(sqlQuery)
                release()
                console.log(res.rows)
                
            }if(err){
                console.log(err)
            }
            pool.end()
        });  
    };


}).listen(3000, () => console.log("Servidor activo http://localhost:3000"))