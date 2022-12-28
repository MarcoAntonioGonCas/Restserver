require('dotenv').config();
const express = require('express');
const cors = require('cors');


class Server {

    constructor() {
        this.app = express();
        //middlewares
        this.middlewares();
        //Rotas de la aplicacion
        this.router();
    }
    middlewares() {

        //Directorio publico
        this.app.use(express.static("./public"))

        //Lectura y parseo de json
        this.app.use(express.json({}));


        //lectura y parseo de xml
        

        //Cors
        this.app.use(cors({origin:"*"}))
    }
    router() {
        this.app.use("/api/user",require("../routers/user-router"))
    }

    listen() {
        const port = process.env.PORT || 3000;
        this.app.listen(port, () => {
            console.log(`Servidor iniciado en el puerto ${port}`);
        });
    }


}


module.exports = Server;