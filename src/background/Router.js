const express = require("express");
const calc = require("./Calc");
const error = require("./ErrorHandler");

class Router {
    constructor(server){
        this.server = server;
        server.use(express.json());

        server.post("/api/calculate", (req, res)=> {
            try {
            calc(req, res)
            } catch (e) {
                error({message: e, status: 400}, req, res);
            };
        });

        server.use(express.static(`${process.cwd()}/src/client/dist`))
    };

    initialize(port){
        console.log("Server Initializing...");
        this.server.listen(port, "0.0.0.0", (()=> {
            console.log(`Server Initialized\nServer Running | Port [${port}]`);
        }));
    };
};

module.exports = Router;